export const getAllQuizzes = async () => {
  const response = await fetch(`/api/quizzes`);
  return await response.json();
};

export const getQuizById = async (quizId) => {
  const response = await fetch(`/api/quizzes/${quizId}`);
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
