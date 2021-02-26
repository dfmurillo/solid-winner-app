<template>
  <div class="quizzes-list">
    <div class="q-pa-md flex flex-center" v-if="isLoadingData">
      <q-circular-progress
        indeterminate
        size="50px"
        :thickness="0.22"
        color="teal"
        track-color="grey-3"
        class="q-ma-md"
      />
    </div>
    <div v-else>
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
              <q-chip
                color="amber-12"
                text-color="black"
                icon="lightbulb"
                v-if="quiz.score"
              >
                {{ quiz.score }}%
              </q-chip>
              <q-chip
                color="blue-10"
                text-color="white"
                icon="access_time"
                v-if="quiz.createdAt"
              >
                {{ quiz.createdAt }}
              </q-chip>
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
  </div>
</template>
<script>
import { getAllQuizzes } from "@/quizzes/services/quizzesService";
import { getLastQuizTakenFromLocal } from "@/helpers/localStorageHelper";
export default {
  name: "QuizzesList",
  data() {
    return {
      isLoadingData: true,
      allQuizzes: []
    };
  },
  mounted() {
    this.fetchAllQuizzes();
  },
  methods: {
    async fetchAllQuizzes() {
      try {
        let { quizzes } = await getAllQuizzes();

        //add latest results if they exist
        quizzes = quizzes.map(quiz => {
          const latestQuizResult = getLastQuizTakenFromLocal(quiz.id);
          if (latestQuizResult) {
            quiz = {
              ...quiz,
              score: latestQuizResult.score,
              createdAt: latestQuizResult.createdAt.split("T")[0]
            };
          }

          return quiz;
        });

        this.allQuizzes = quizzes;
        this.isLoadingData = false;
      } catch (error) {
        // handle error of loadig data
      }
    }
  }
};
</script>
