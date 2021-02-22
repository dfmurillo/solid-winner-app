<template>
  <div class="all-quizzes q-pa-md">
    <div class="row">
      <div class="col">
        <h4>For this test, here are our quizzes:</h4>
        <quizzes-list />
      </div>
    </div>
  </div>
</template>
<script>
import QuizzesList from "@/quizzes/components/QuizzesList.vue";
export default {
  name: "QuizzesView",
  components: {
    QuizzesList
  }
};
</script>
