const getQuizKey = (quizId = 0) => {
  return `quiz_${quizId}`;
};

export const saveQuizInLocal = (quizId, score, questionAnswers) => {
  let quizDataToSave = getQuizzesByIdFromLocal(quizId) || [];

  quizDataToSave.push({
    score,
    questionAnswers,
    doneAt: new Date(),
  });

  localStorage.setItem(getQuizKey(quizId), JSON.stringify(quizDataToSave));
};

export const getQuizzesByIdFromLocal = (quizId) => {
  return JSON.parse(localStorage.getItem(getQuizKey(quizId)));
};
