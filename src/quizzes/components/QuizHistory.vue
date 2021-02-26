<template>
  <div class="quiz-history q-px-lg q-pb-md">
    <q-timeline
      color="secondary"
      v-for="quiz in allQuizzesHistory"
      :key="quiz.id"
      side="right"
      layout="comfortable"
    >
      <h5>{{ quiz.name }}</h5>

      <q-timeline-entry
        v-for="history in quiz.quizHistory"
        :key="history.createdAt"
        title="Test Taken"
        :subtitle="formatDate(history.createdAt)"
        side="left"
        :color="colorBasedOnScore(history.score)"
      >
        <div>
          <p><strong>Score:</strong> {{ history.score }}%</p>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script>
import {
  getAllQuizzes,
  COLOR_BY_SCORE
} from "@/quizzes/services/quizzesService";
import { getQuizzesByIdFromLocal } from "@/helpers/localStorageHelper";
import { formatDateForTimeline } from "@/helpers/dateTimeHelper";
export default {
  name: "QuizHistory",
  data() {
    return {
      allQuizzesHistory: []
    };
  },
  mounted() {
    this.fetchAllQuizzes();
  },
  methods: {
    async fetchAllQuizzes() {
      let { quizzes } = await getAllQuizzes();

      //add latest results if they exist
      quizzes = quizzes.map(quiz => {
        const quizHistory = getQuizzesByIdFromLocal(quiz.id);
        if (quizHistory) {
          quiz = {
            ...quiz,
            quizHistory: quizHistory.reverse()
          };
        }
        return quiz;
      });

      this.allQuizzesHistory = quizzes;
    },
    formatDate(date) {
      return formatDateForTimeline(date);
    },
    colorBasedOnScore(score) {
      const [colorThreshold] = COLOR_BY_SCORE.filter(
        ({ from, to }) => score >= from && score < to
      );
      return colorThreshold.color;
    }
  }
};
</script>
