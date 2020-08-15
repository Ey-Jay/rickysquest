import React, { useContext } from 'react';
import { Container } from './styled';

import { Redirect, useParams } from 'react-router-dom';

import QuestContext from 'context/quests';

import Question from './Question';

import useQuestions from './useQuestions';

const Quiz = () => {
  const { questId } = useParams();

  const { getQuestById, setQuestFinished } = useContext(QuestContext);

  const { questions, character, finished } = getQuestById(questId);

  const [
    selectedAnswerID,
    setAnswersSelected,
    getSetAnswer,
    validateAnswers,
  ] = useQuestions(questions);

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateAnswers()) {
      setQuestFinished(questId);
    }
  };

  return (
    <Container>
      {finished && <Redirect to="/endscreen/success" />}
      <h1> {character}</h1>

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
