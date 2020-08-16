import { useState } from "react";

const useQuestions = (questions) => {
  const [selectedAnswerID, setAnswersSelected] = useState(
    Array(questions.length).fill(-1)
  );

  const getSetAnswer = (index) => (answer) => {
    const new_answersGiven = [...selectedAnswerID];
    new_answersGiven[index] = answer;
    setAnswersSelected(new_answersGiven);
  };

  const validateAnswers = () => {
    return !selectedAnswerID.some(
      (answer, id) => questions[id].correctIndex !== answer
    );
  };
  return {
    selectedAnswerID,
    setAnswersSelected,
    getSetAnswer,
    validateAnswers,
  };
};

export default useQuestions;
