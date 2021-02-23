import QuizSingle from "./QuizSingle.vue";
import flushPromises from "flush-promises";
import { getQuizById, validateQuiz } from "@/quizzes/services/quizzesService";
import { saveQuizInLocal } from "@/helpers/localStorage";
import { shallowMount } from "@vue/test-utils";

jest.mock("@/quizzes/services/quizzesService", () => ({
  getQuizById: jest.fn(),
  validateQuiz: jest.fn(),
}));

const stubs = ["q-btn", "q-step", "q-stepper", "q-stepper-navigation"];

describe("Display a single quiz", () => {
  // Given we get the data from the tests, when the component is mounted, then the question is drawn
  // Given we dont get any data from the quiz, when the component is mounted, then the user is redirected to all quizzes
  // Given the user has not answer the current question, when is doing the quiz, then the Hit me! button is disabled
  // Given the user answers a question, when is doing the quiz, then I enable the Hit me! button
  // Given the user has clicked the Hit me! button, when is doing ghe quiz, then displays the next question
  // Given the user clicks the back button, when is doing the test, then goes back one question
  // Given the user clicks on Check your answers button, when has done all quiestions, then we get the score and is redirected to all quizzes
});
