<template>
  <div class="quiz-question">
    <div
      v-for="(answer, index) in questionAnswers"
      :key="`answer_${answer.answerId}_question_${quizStep}`"
      class="q-gutter-sm"
    >
      <q-checkbox
        v-if="answerType === 'multiple'"
        :label="answer.answer"
        right
        v-model="multipleAnswersValue[index]"
        :true-value="answer.answerId"
        @input="multipleOptionSelected"
      />
      <q-radio
        v-else-if="answerType === 'single'"
        v-model="singleAnswersValue"
        :val="answer.answerId"
        :label="answer.answer"
        @input="singleOptionSelected"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "QuizQuestion",
  props: {
    questionAnswersProp: {
      type: Array,
      required: true
    },
    answerTypeProp: {
      type: String,
      required: true
    },
    quizStepProp: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      questionAnswers: this.questionAnswersProp,
      answerType: this.answerTypeProp,
      quizStep: this.quizStepProp,
      multipleAnswersValue: [],
      singleAnswersValue: null
    };
  },
  mounted() {
    this.fillAnswersValueWithFalse();
  },
  methods: {
    fillAnswersValueWithFalse() {
      this.multipleAnswersValue = Array.from(
        Array(this.questionAnswers.length),
        () => false
      );
    },
    multipleOptionSelected() {
      this.emitAnswer(this.multipleAnswersValue.filter(value => value));
    },
    singleOptionSelected() {
      this.emitAnswer([this.singleAnswersValue]);
    },
    emitAnswer(valueToEmit) {
      this.$emit("onSelected", valueToEmit);
    }
  }
};
</script>
