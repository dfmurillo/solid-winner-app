import QuizSingle from "./QuizSingle.vue";
import flushPromises from "flush-promises";
import { getQuizById } from "@/quizzes/services/quizzesService";
import { shallowMount } from "@vue/test-utils";

jest.mock("@/quizzes/services/quizzesService", () => ({
  getQuizById: jest.fn()
}));

const stubs = ["q-btn", "q-step", "q-stepper", "q-stepper-navigation"];
const propsData = {
  quizId: 1
};

const factoryWrapper = (options = {}) =>
  shallowMount(QuizSingle, { stubs, propsData, ...options });

describe("Display a single quiz", () => {
  it("Given we get the data from the tests, when the component is mounted, then the question are drawn", async () => {
    getQuizById.mockResolvedValue({
      quiz: {
        name: "DA quiz",
        questions: [
          {
            questionId: 11,
            question: "Question N1",
            answers: [],
            answerType: "Some string"
          },
          {
            questionId: 12,
            question: "Question N2",
            answers: [],
            answerType: "Some string"
          },
          {
            questionId: 13,
            question: "Question N3",
            answers: [],
            answerType: "Some string"
          }
        ]
      }
    });

    const wrapper = factoryWrapper();
    await flushPromises();

    expect(wrapper.find('[data-test="quiz-name"]').text()).toEqual("DA quiz");
    expect(wrapper.findAll('[data-test="quiz-question"]').length).toEqual(3);
  });

  it("Given we dont get any data from the quiz, when the component is mounted, then the user is redirected to all quizzes", async () => {
    getQuizById.mockRejectedValue("No no no");

    const wrapper = factoryWrapper({
      mocks: {
        $router: []
      }
    });
    await flushPromises();

    expect(wrapper.vm.$router[0].name).toEqual("QuizzesList");
  });

  it("Given the user has not answer the current question, when is doing the quiz, then the Hit me! button is disabled", async () => {
    getQuizById.mockResolvedValue({
      quiz: {
        name: "DA quiz",
        questions: [
          {
            questionId: 11,
            question: "Question N1",
            answers: [],
            answerType: "Some string"
          }
        ]
      }
    });

    const wrapper = factoryWrapper();
    await flushPromises();
    expect(wrapper.vm.disabledNextButton).toBeTruthy();
  });
  it("Given the user answers a question and emits the action, when is doing the quiz, then I enable the Hit me! button", async () => {
    getQuizById.mockResolvedValue({
      quiz: {
        name: "DA quiz",
        questions: [
          {
            questionId: 11,
            question: "Question N1",
            answers: [],
            answerType: "Some string"
          }
        ]
      }
    });

    const wrapper = factoryWrapper();
    await flushPromises();
    wrapper.vm.answerIsSelected([1]);
    expect(wrapper.vm.disabledNextButton).toBeFalsy();
  });

  it("Given the user has clicked the Hit me! button, when is doing ghe quiz, then displays the next question", async () => {
    getQuizById.mockResolvedValue({
      quiz: {
        name: "DA quiz",
        questions: [
          {
            questionId: 1,
            question: "Question N1",
            answers: [],
            answerType: "Some string"
          },
          {
            questionId: 2,
            question: "Question N2",
            answers: [],
            answerType: "Some string"
          }
        ]
      }
    });

    const wrapper = factoryWrapper();
    await flushPromises();

    wrapper.vm.answerIsSelected([1]);
    wrapper.vm.showNextQuestion();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.quizStep).toEqual(2);
    expect(wrapper.vm.disabledNextButton).toBeTruthy();
  });

  // Given the user clicks the back button, when is doing the test, then goes back one question
  // Given the user clicks on Check your answers button, when has done all quiestions, then we get the score and is redirected to all quizzes
});
