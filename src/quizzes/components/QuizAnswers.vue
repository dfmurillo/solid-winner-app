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
  name: "QuizAnswers",
  props: {
    questionAnswers: {
      type: Array,
      required: true
    },
    answerType: {
      type: String,
      required: true
    },
    quizStep: {
      type: Number,
      required: true
    },
    previousData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      multipleAnswersValue: [],
      singleAnswersValue: null
    };
  },
  mounted() {
    this.assignValuesToQuestion();
  },
  methods: {
    assignValuesToQuestion() {
      if (this.previousData.length === 0 && this.answerType === "multiple") {
        this.fillAnswersValueWithFalse();
        return true;
      } else if (this.previousData.length > 0) {
        this.assingPreviousDataToComponent();
        return true;
      }
      return false;
    },
    fillAnswersValueWithFalse() {
      this.multipleAnswersValue = Array.from(
        Array(this.questionAnswers.length),
        () => false
      );
    },
    assingPreviousDataToComponent() {
      if (this.answerType === "single") {
        this.singleAnswersValue = this.previousData[0];
        return true;
      } else {
        this.multipleAnswersValue = this.questionAnswers.map(({ answerId }) =>
          this.previousData.indexOf(answerId) >= 0 ? answerId : false
        );
      }
      return false;
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
