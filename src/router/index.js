import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Quizzes from "@/quizzes/views/Quizzes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/quizzes",
    name: "Quizzes",
    component: Quizzes,
    children: [
      {
        path: "list",
        name: "QuizzesList",
        component: () =>
          import(
            /* webpackChunkName: "quizzes" */ "@/quizzes/views/QuizzesList.vue"
          )
      },
      {
        path: "history",
        name: "QuizzesHistory",
        component: () =>
          import(
            /* webpackChunkName: "quizzes" */ "@/quizzes/views/QuizzesHistory.vue"
          )
      },
      {
        path: ":quizId",
        name: "Quiz",
        component: () =>
          import(/* webpackChunkName: "quizzes" */ "@/quizzes/views/Quiz.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
