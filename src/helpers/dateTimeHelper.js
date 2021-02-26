export const formatDateForTimeline = date => {
  const quizDate = new Date(date);

  if (isNaN(quizDate.getTime())) {
    return null;
  }

  return `${getMonthOfYear(
    quizDate.getMonth()
  )} ${quizDate.getDay()}, ${quizDate.getFullYear()} at ${quizDate.getHours()}:${quizDate.getMinutes()}`;
};

const getMonthOfYear = dateMonth =>
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][dateMonth] || null;
