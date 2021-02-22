export const getAllQuizzes = async () => {
  const response = await fetch("/api/quizzes");
  return await response.json();
};

export const getQuizById = async (quizId) => {
  const response = await fetch(`/api/quizzes/${quizId}`);
  return await response.json();
};
