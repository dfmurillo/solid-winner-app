<template>
  <div class="quizzes-list">
    <q-list padding :data-test="`quizzes-list`" v-if="allQuizzes.length > 1">
      <q-item
        v-for="quiz in allQuizzes"
        :key="`quiz_${quiz.id}`"
        :to="quiz.isReady ? `/quizzes/${quiz.id}` : null"
        :data-test="`quizzes-list-item`"
      >
        <q-item-section avatar>
          <q-icon
            :name="quiz.isReady ? `playlist_add_check` : `cancel`"
            :class="quiz.isReady ? `text-primary` : `text-negative`"
          />
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
    <q-banner
      v-else
      :data-test="`sorry-message`"
      inline-actions
      class="text-white bg-red"
    >
      <h4>
        😢 Sorry there are no quizzes for the moment
      </h4>
    </q-banner>
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
