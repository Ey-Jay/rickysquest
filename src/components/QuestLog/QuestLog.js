import React, { useContext } from 'react';
import { FinishedQuests, AvailableQuests, NoQuests } from './styled';
import { useQuery, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'context/game';

const GET_CHARACTERS = (ids) => gql`
  query Characters {
    characters(id: [${[...ids]}]) {
      id
      name
      image
    }
  }
`;

const QuestLog = () => {
  const { quizzes } = useContext(GameContext);
  const availableQuizzes = quizzes.filter((quiz) => !quiz.isDone);
  const finishedQuizzes = quizzes.filter((quiz) => quiz.isDone);

  const quizRewards = quizzes.map((quiz) => quiz.reward);
  const { loading, data, error } = useQuery(GET_CHARACTERS(quizRewards));

  function getRewardData(id) {
    return data.characters.find((char) => parseInt(char.id) === parseInt(id));
  }

  const history = useHistory();
  const selectQuestOnClick = (quest) => () => {
    history.push('/quest/' + quest.id);
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>Quizzes</h1>
      <h2>Available</h2>
      <AvailableQuests>
        {availableQuizzes.length > 0 ? (
          availableQuizzes.map((quest) => (
            <li key={quest.id}>
              <h3>Quiz: {getRewardData(quest.reward).name}</h3>
              <button onClick={selectQuestOnClick(quest)}>Start</button>
            </li>
          ))
        ) : (
          <NoQuests>No Available Adventures</NoQuests>
        )}
      </AvailableQuests>
      <h2>Finished</h2>
      <FinishedQuests>
        {finishedQuizzes.length > 0 ? (
          finishedQuizzes.map((quest) => (
            <li key={quest.id}>
              <h3>Quiz: {getRewardData(quest.reward).name}</h3>
            </li>
          ))
        ) : (
          <NoQuests>No Finished Quests</NoQuests>
        )}
      </FinishedQuests>
    </>
  );
};

export default QuestLog;
