export const getAllQuizzes = async () => {
  const response = await fetch("/api/quizzes");
  return await response.json();
};
