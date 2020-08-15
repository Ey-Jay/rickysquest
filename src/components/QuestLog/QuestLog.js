import React, { useContext } from 'react';
import {
  FinishedQuests,
  ActiveQuests,
  AvailableQuests,
  NoQuests,
} from './styled';
import { Link } from 'react-router-dom';

import QuestContext from 'context/quests';
import adventures from 'data/adventures';

const QuestLog = () => {
  // const { unfinishedQuests, finishedQuests } = useContext(QuestContext);

  return (
    <>
      <h1>Quests</h1>
      <h2>Finished</h2>
      <FinishedQuests>
        {adventures.length > 0 ? (
          adventures.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
              <button>See Results</button>
            </li>
          ))
        ) : (
          <NoQuests>No Finished Quests</NoQuests>
        )}
      </FinishedQuests>

      <h2>Active</h2>
      <ActiveQuests>
        {adventures.length > 0 ? (
          adventures.map(({ id, title, timeLeft }) => (
            <li key={id}>
              <h3>{title}</h3>
              <aside>{`${timeLeft} min`}</aside>
            </li>
          ))
        ) : (
          <NoQuests>No Active Quests</NoQuests>
        )}
      </ActiveQuests>

      <h2>Available</h2>
      <AvailableQuests>
        <li className="quiz">
          <h3>Start a Quiz</h3>
          <button>Start</button>
        </li>
        {adventures.length > 0 ? (
          adventures.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
              <button>Start</button>
            </li>
          ))
        ) : (
          <NoQuests>No Available Adventures</NoQuests>
        )}
      </AvailableQuests>
    </>
  );
};

export default QuestLog;
