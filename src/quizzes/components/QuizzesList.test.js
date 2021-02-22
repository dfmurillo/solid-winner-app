import flushPromises from "flush-promises";
import { shallowMount } from "@vue/test-utils";
import { getAllQuizzes } from "@/quizzes/services/quizzesService";
import QuizzesList from "./QuizzesList.vue";

jest.mock("@/quizzes/services/quizzesService", () => ({
  getAllQuizzes: jest.fn(),
}));

const stubs = ["q-icon", "q-item", "q-item-label", "q-item-section", "q-list"];

describe("QuizzesList", () => {
  it("Given we get the list of quizzes, when the components is mounted, then the list is drawn", async () => {
    getAllQuizzes.mockResolvedValue({
      quizzes: [
        {
          id: 11,
          name: "Name 1",
          isReady: true,
        },
        {
          id: 12,
          name: "Name 2",
          isReady: true,
        },
        {
          id: 13,
          name: "Name 3",
          isReady: false,
        },
      ],
    });

    const wrapper = shallowMount(QuizzesList, { stubs });
    await flushPromises();

    const itemElements = wrapper.findAll('[data-test="quizzes-list-item"]');

    //check expected quantity
    expect(itemElements.length).toEqual(3);

    //check names
    expect(itemElements.at(0).text()).toEqual("Name 1");
    expect(itemElements.at(1).text()).toEqual("Name 2");

    // test that the not ready have the text
    expect(itemElements.at(2).text()).toContain("Not ready yet!");

    //check if has quiz, have a link
    expect(itemElements.at(0).attributes("to")).toEqual("/quizzes/11");
    //if is not ready should not have a link
    expect(itemElements.at(2).attributes("to")).toBeFalsy();
  });
});
