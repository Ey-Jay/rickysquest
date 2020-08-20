import React, { useContext, useState } from 'react';
import { GameContext } from 'context/game';
import { AuthContext } from 'context/AuthProvider';
import { useParams, useHistory } from 'react-router-dom';
import EndScreen from 'components/EndScreen';
import solveQuiz from 'base/solveQuiz';

const QuestMenu = () => {
  const { quizId } = useParams();
  const { quizzes, refreshData } = useContext(GameContext);
  const { currentUser } = useContext(AuthContext);
  const [outcome, setOutcome] = useState(null);

  const quizData = quizzes.find(
    (quiz) => parseInt(quiz.id) === parseInt(quizId)
  );

  console.log(quizData);

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
    <div>
      <div>Question: {quizData.question}</div>
      <ul>
        {quizData.answers.map((answer, idx) => (
          <li key={idx} onClick={() => pickAnswer(answer)}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestMenu;
