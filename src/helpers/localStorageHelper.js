const getQuizKey = (quizId = 0) => {
  return `quiz_${quizId}`;
};

const setListQuizIdSaved = (quizId) => {
  const quizzesMap = getQuizzesMapTakenFromLocal() || [];
  quizzesMap.push(getQuizKey(quizId));

  //ensure I'm not repeating values, so I create a Set to filter duplicates
  const quizzesSet = new Set(quizzesMap);
  localStorage.setItem(
    "quizzes_map",
    JSON.stringify(Array.from(quizzesSet.values()))
  );
};

export const saveQuizInLocal = (quizId, score, questionAnswers) => {
  const quizDataToSave = getQuizzesByIdFromLocal(quizId) || [];

  quizDataToSave.push({
    score,
    questionAnswers,
    createdAt: new Date(),
  });

  localStorage.setItem(getQuizKey(quizId), JSON.stringify(quizDataToSave));
  setListQuizIdSaved(quizId);
};

export const getQuizzesByIdFromLocal = (quizId) => {
  return JSON.parse(localStorage.getItem(getQuizKey(quizId)));
};

export const getQuizzesMapTakenFromLocal = () => {
  return JSON.parse(localStorage.getItem("quizzes_map"));
};

export const getLastQuizTakenFromLocal = (quizId) => {
  const quizzes = getQuizzesByIdFromLocal(quizId);
  return quizzes ? [...quizzes].pop() : null;
};
