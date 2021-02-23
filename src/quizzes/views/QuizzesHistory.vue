<template>
  <div class="all-quizzes q-pa-md">
    <div class="row">
      <div class="col">
        <h4>Here, look what you have done!</h4>
        <quiz-history />
      </div>
    </div>
  </div>
</template>
<script>
import QuizHistory from "@/quizzes/components/QuizHistory.vue";
export default {
  name: "HistoryView",
  components: {
    QuizHistory
  }
};
</script>
