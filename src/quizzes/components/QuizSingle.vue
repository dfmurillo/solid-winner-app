<template>
  <div class="single-quiz">
    <h4 data-test="quiz-name">{{ quizQuestions.name }}</h4>
    <div class="q-pa-md">
      <q-stepper
        v-model="quizStep"
        ref="stepper"
        vertical
        active-color="secondary"
        done-color="blue-grey-4"
        animated
      >
        <q-step
          v-for="question in quizQuestions.questions"
          :key="`question_${question.questionId}`"
          :name="question.questionId"
          :title="question.question"
          :prefix="question.questionId"
          :done="quizStep > question.questionId"
          :data-test="`quiz-question`"
          done-icon="https"
        >
          <quiz-answers
            :questionAnswers="question.answers"
            :answerType="question.answerType"
            :quizStep="quizStep"
            :previousData="currentAnswers"
            @onSelected="answerIsSelected"
          />
          <q-stepper-navigation>
            <q-btn
              v-if="quizStep < quizQuestions.questions.length"
              @click="showNextQuestion"
              color="primary"
              label="Hit me!"
              :disabled="disabledNextButton"
              :data-test="`next-question-button`"
            />
            <q-btn
              v-else
              @click="validateAndSaveQuiz"
              color="primary"
              label="Check your answers! 😎"
              :disabled="disabledNextButton"
            />
            <q-btn
              v-if="quizStep > 1"
              flat
              @click="showPreviousQuestion"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>
<script>
import QuizAnswers from "@/quizzes/components/QuizAnswers.vue";
import { getQuizById, validateQuiz } from "@/quizzes/services/quizzesService";
import { saveQuizInLocal } from "@/helpers/localStorageHelper";
export default {
  name: "QuizSingleComponent",
  components: {
    QuizAnswers
  },
  props: {
    quizId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      quizStep: 1,
      quizQuestions: {},
      disabledNextButton: true,
      quizProgress: [],
      currentAnswers: []
    };
  },
  mounted() {
    this.fetchQuizData();
  },
  watch: {
    quizStep(newStep) {
      const [currentStepData] = this.quizProgress.filter(
        ({ questionId }) => questionId === newStep
      );

      if (
        typeof currentStepData === "undefined" ||
        typeof currentStepData.answers === "undefined"
      ) {
        return false;
      }

      this.currentAnswers = currentStepData.answers;
      this.disabledNextButton =
        currentStepData.answers.length === 0 ? true : false;

      return true;
    }
  },
  methods: {
    async fetchQuizData() {
      try {
        const { quiz } = await getQuizById(this.quizId);
        this.quizQuestions = quiz;
        this.initializeQuizData();
      } catch (error) {
        this.$router.push({ name: "QuizzesList" });
      }
    },
    initializeQuizData() {
      this.quizProgress = this.quizQuestions.questions.map(
        ({ questionId }) => ({
          questionId,
          answers: []
        })
      );
    },
    answerIsSelected(selectedAnswers) {
      this.quizProgress = this.quizProgress.map(questionProgress => {
        if (questionProgress.questionId === this.quizStep) {
          questionProgress = {
            ...questionProgress,
            answers: selectedAnswers
          };
        }
        return questionProgress;
      });
      this.disabledNextButton = false;
    },
    async validateAndSaveQuiz() {
      try {
        const { quizResult } = await validateQuiz(
          this.quizId,
          this.quizProgress
        );
        saveQuizInLocal(this.quizId, quizResult, this.quizProgress);
        this.$router.push({ name: "QuizzesList" });
      } catch (error) {
        // handle error
      }
    },
    showNextQuestion() {
      this.quizStep += 1;
    },
    showPreviousQuestion() {
      this.quizStep -= 1;
    }
  }
};
</script>
