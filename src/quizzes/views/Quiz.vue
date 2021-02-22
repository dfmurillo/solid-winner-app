<template>
  <div class="single-quiz q-pa-md">
    <div class="row">
      <div class="col">
        <quiz-single :quizId="quizToShow" />
      </div>
    </div>
  </div>
</template>
<script>
import QuizSingle from "@/quizzes/components/QuizSingle.vue";
export default {
  name: "QuizView",
  components: {
    QuizSingle
  },
  data() {
    return {
      quizToShow: parseInt(this.$route.params.quizId, 10)
    };
  }
};
</script>
