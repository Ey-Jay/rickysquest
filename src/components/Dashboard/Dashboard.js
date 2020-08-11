import React from 'react';
import { NoQuests, FinishedQuests, ActiveQuests } from './styled';

const finishedQuests = [
  {
    id: 1,
    title: 'Florp the Glorp'
  },
  {
    id: 2,
    title: 'Glorp the Florp'
  },
  {
    id: 3,
    title: 'Florp the Glorp'
  },
  {
    id: 4,
    title: 'Glorp the Florp'
  }
];

const activeQuests = [
  {
    id: 1,
    title: 'Florp the Glorp',
    timeLeft: 13
  },
  {
    id: 2,
    title: 'Glorp the Florp',
    timeLeft: 24
  }
];

const Dashboard = () => (
  <>
    <h2>Finished Quests</h2>
    <FinishedQuests>
      {finishedQuests.length > 0 ? (
        finishedQuests.map(({ id, title }) => (
          <li key={id}>
            <h3>{title}</h3>
            <button>See Results</button>
          </li>
        ))
      ) : (
        <NoQuests>No Finished Quests</NoQuests>
      )}
    </FinishedQuests>
    <h2>Active Quests</h2>
    <ActiveQuests>
      {activeQuests.length > 0 ? (
        activeQuests.map(({ id, title, timeLeft }) => (
          <li key={id}>
            <h3>{title}</h3>
            <aside>{`${timeLeft} min`}</aside>
          </li>
        ))
      ) : (
        <NoQuests>No Active Quests</NoQuests>
      )}
    </ActiveQuests>
  </>
);

export default Dashboard;
