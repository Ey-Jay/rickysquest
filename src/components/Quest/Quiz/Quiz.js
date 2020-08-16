import React, { useContext } from "react";
import { Container } from "./styled";

import { QuestContext } from "context/quests";

import Question from "./Question";

import useQuestions from "./useQuestions";

const Quiz = ({ quest }) => {
  const { setQuestFinished } = useContext(QuestContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateAnswers()) {
      alert("Correct!");
      setQuestFinished(quest);
    }
  };

  const questions = quest.questions;

  const { selectedAnswerID, getSetAnswer, validateAnswers } = useQuestions(
    questions
  );

  return (
    <Container>
      <h1> {quest.follower.name}</h1>

      {questions.map((question, i) => (
        <Question
          key={i}
          {...question}
          selectedAnswer={selectedAnswerID[i]}
          setAnswersGiven={getSetAnswer(i)}
        />
      ))}

      <form action="">
        <input type="submit" onClick={onSubmit} />
      </form>
    </Container>
  );
};

export default Quiz;
