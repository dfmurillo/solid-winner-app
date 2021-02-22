<template>
  <div class="quizzes-list">
    <q-list padding :data-test="`quizzes-list`">
      <q-item
        v-for="quiz in allQuizzes"
        :key="`quiz_${quiz.id}`"
        :to="quiz.isReady ? `/quizzes/${quiz.id}` : null"
        :data-test="`quizzes-list-item`"
      >
        <q-item-section avatar>
          <q-icon :name="quiz.isReady ? `playlist_add_check` : `cancel`" />
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ quiz.name }}
          </q-item-label>
          <q-item-label caption v-if="!quiz.isReady"
            >Not ready yet!</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { getAllQuizzes } from "@/quizzes/services/quizzesService";
export default {
  name: "QuizzesList",
  data() {
    return {
      allQuizzes: []
    };
  },
  mounted() {
    this.fetchAllQuizzes();
  },
  methods: {
    async fetchAllQuizzes() {
      const { quizzes } = await getAllQuizzes();
      this.allQuizzes = quizzes;
    }
  }
};
</script>
