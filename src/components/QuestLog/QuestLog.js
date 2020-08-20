import React, { useContext, useEffect } from 'react';
import {
  FinishedQuests,
  // ActiveQuests,
  AvailableQuests,
  NoQuests,
} from './styled';

import { useHistory } from 'react-router-dom';

import { GameContext } from 'context/game';

const QuestLog = () => {
  // const { quests, setQuestsWithDB } = useContext(GameContext);

  // useEffect(() => {
  //   setQuestsWithDB();
  //   // eslint-disable-next-line
  // }, []);

  // const activeQuests = quests.filter((q) => q.active);
  const availableQuests = [];
  const finishedQuests = [];
  // const availableQuests = quests.filter((q) => q.available);
  // const finishedQuests = quests.filter((q) => q.finished);

  const history = useHistory();

  const selectQuestOnClick = (quest) => () => {
    history.push('/quest/' + quest.id);
  };

  return (
    <>
      <h1>Quizzes</h1>
      <h2>Available</h2>
      <AvailableQuests>
        {availableQuests.length > 0 ? (
          availableQuests.map((quest) => (
            <li key={quest.id}>
              <h3>
                {quest.type.toUpperCase()}: {quest.follower.name}
              </h3>
              <button onClick={selectQuestOnClick(quest)}>Start</button>
            </li>
          ))
        ) : (
          <NoQuests>No Available Adventures</NoQuests>
        )}
      </AvailableQuests>
      <h2>Finished</h2>
      <FinishedQuests>
        {finishedQuests.length > 0 ? (
          finishedQuests.map(({ id, follower, type }) => (
            <li key={id}>
              <h3>{follower.name}</h3>
              <button>See Results</button>
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
