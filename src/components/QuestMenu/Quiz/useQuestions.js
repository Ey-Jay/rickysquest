import { useState } from 'react';

const useQuestions = (questions) => {
  const [answerSelectionArray, setAnswerSelectionArray] = useState(
    Array(questions.length).fill(-1)
  );

  const getSelectAnswer = (index) => (answer) => {
    const new_answersGiven = [...answerSelectionArray];
    new_answersGiven[index] = answer;
    setAnswerSelectionArray(new_answersGiven);
  };

  const validateAnswers = () => {
    return !answerSelectionArray.some(
      (answer, id) => questions[id].correctIndex !== answer
    );
  };
  return {
    answerSelectionArray,

    getSelectAnswer,
    validateAnswers,
  };
};

export default useQuestions;
