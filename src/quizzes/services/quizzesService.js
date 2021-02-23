import { raiseFetchErrorIfExist } from "@/helpers/fetchHelper.js";

export const COLOR_BY_SCORE = [
  {
    from: 0,
    to: 50,
    color: "red-9",
  },
  {
    from: 50,
    to: 70,
    color: "yellow-8",
  },
  {
    from: 70,
    to: 100,
    color: "light-green-7",
  },
];

export const getAllQuizzes = async () => {
  const response = await fetch(`/api/quizzes`);
  raiseFetchErrorIfExist(response);
  return await response.json();
};

export const getQuizById = async (quizId) => {
  const response = await fetch(`/api/quizzes/${quizId}`);
  raiseFetchErrorIfExist(response);
  return await response.json();
};

export const validateQuiz = async (quizId, questions) => {
  const response = await fetch(`/api/quizzes/validate`, {
    method: "POST",
    body: JSON.stringify({ quizId, questions }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
