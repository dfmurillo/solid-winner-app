<template>
  <div class="single-quiz">
    <h4>{{ quizQuestions.name }}</h4>
    <div class="q-pa-md">
      <q-stepper v-model="quizStep" vertical color="primary" animated>
        <q-step
          v-for="question in quizQuestions.questions"
          :key="`question_${question.questionId}`"
          :name="question.questionId"
          :title="question.question"
          :prefix="question.questionId"
          :done="quizStep > question.questionId"
        >
          <quiz-question
            :questionAnswers="question.answers"
            :answerType="question.answerType"
            :quizStep="quizStep"
            :previousData="currentAnswers"
            @onSelected="answerIsSelected"
          />
          <q-stepper-navigation>
            <q-btn
              v-if="quizStep < quizQuestions.questions.length"
              @click="quizStep += 1"
              color="primary"
              label="Hit me!"
              :disabled="disabledNextButton"
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
              @click="quizStep -= 1"
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
import QuizQuestion from "@/quizzes/components/QuizQuestion.vue";
import { getQuizById, validateQuiz } from "@/quizzes/services/quizzesService";
import { saveQuizInLocal } from "@/helpers/localStorage";
export default {
  name: "QuizSingleComponent",
  components: {
    QuizQuestion
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
      const currentStepData = this.quizProgress.filter(
        ({ questionId }) => questionId === newStep
      )[0];
      this.currentAnswers = currentStepData.answers;
      if (currentStepData.answers.length === 0) {
        this.disabledNextButton = true;
      } else {
        this.disabledNextButton = false;
      }
    }
  },
  methods: {
    async fetchQuizData() {
      const { quiz } = await getQuizById(this.quizId);
      this.quizQuestions = quiz;

      this.bootstrapQuizProgress();
    },
    bootstrapQuizProgress() {
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
          return {
            ...questionProgress,
            answers: selectedAnswers
          };
        }

        return questionProgress;
      });
      this.disabledNextButton = false;
    },
    async validateAndSaveQuiz() {
      const { quizResult } = await validateQuiz(this.quizId, this.quizProgress);
      saveQuizInLocal(this.quizId, quizResult, this.quizProgress);
      this.$router.push({ name: "Quizzes" });
    }
  }
};
</script>