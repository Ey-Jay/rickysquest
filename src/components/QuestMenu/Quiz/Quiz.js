import React, { useContext } from 'react';
import { Container } from './styled';

import { QuestContext } from 'context/game';

import Question from './Question';

import useQuestions from './useQuestions';

const Quiz = ({ quest, onSuccess }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateAnswers()) {
      onSuccess();
    }
  };

  const questions = quest.questions;

  const {
    answerSelectionArray,
    getSelectAnswer,
    validateAnswers,
  } = useQuestions(questions);

  return (
    <Container>
      <h1> {quest.follower.name}</h1>

      {questions.map((question, i) => (
        <Question
          key={i}
          {...question}
          selectedAnswer={answerSelectionArray[i]}
          setAnswersGiven={getSelectAnswer(i)}
        />
      ))}

      <form action="">
        <input type="submit" onClick={onSubmit} />
      </form>
    </Container>
  );
};

export default Quiz;
