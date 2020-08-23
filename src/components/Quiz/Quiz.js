import React, { useContext, useState } from 'react';
import { GameContext } from 'context/GameContext';
import { AuthContext } from 'context/AuthContext';
import { useParams } from 'react-router-dom';
import EndScreen from 'components/EndScreen';
import solveQuiz from 'base/solveQuiz';
import { Question, Answers, Option } from './styled';

const QuestMenu = () => {
  const { quizId } = useParams();
  const { quizzes, refreshData } = useContext(GameContext);
  const { currentUser } = useContext(AuthContext);
  const [outcome, setOutcome] = useState(null);

  const quizData = quizzes.find(
    (quiz) => parseInt(quiz.id) === parseInt(quizId)
  );

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  if (outcome)
    return (
      <>
        <EndScreen outcome={outcome} quizData={quizData} />
      </>
    );

  function pickAnswer(value) {
    solveQuiz(quizData.id, value, currentUser.uid).then((isCorrect) => {
      if (isCorrect) setOutcome('success');
      else setOutcome('fail');
      refreshData();
    });
  }

  return (
    <>
      <Question>{quizData.question}</Question>
      <Answers>
        {shuffle(quizData.answers).map((answer, idx) => (
          <Option key={idx} onClick={() => pickAnswer(answer)}>
            {answer}
          </Option>
        ))}
      </Answers>
    </>
  );
};

export default QuestMenu;
