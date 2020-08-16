import React, { useContext, useState } from "react";
import {
  FinishedQuests,
  ActiveQuests,
  AvailableQuests,
  NoQuests,
} from "./styled";

import { Redirect } from "react-router-dom";

import { QuestContext } from "context/quests";
import quests from "data/quests";

const QuestLog = () => {
  const { setQuest } = useContext(QuestContext);

  const [buttonPressed, setButtonPressed] = useState(false);

  const activeQuests = quests.filter((q) => q.active);
  const availableQuests = quests.filter((q) => !q.active && q.available);
  const finishedQuests = quests.filter((q) => q.finished);

  const onActiveClick = (quest) => () => {
    setQuest(quest);
    setButtonPressed(true);
  };

  return (
    <>
      {buttonPressed && <Redirect to="/quest"></Redirect>}
      <h1>Quests</h1>
      <h2>Active</h2>
      <ActiveQuests>
        {activeQuests.length > 0 ? (
          activeQuests.map(({ id, follower, type }) => (
            <li key={id}>
              <h3>{follower.name}</h3>
              <aside>____{type.toUpperCase()}____</aside>
            </li>
          ))
        ) : (
          <NoQuests>No Active Quests</NoQuests>
        )}
      </ActiveQuests>
      <h2>Available</h2>
      <AvailableQuests>
        {availableQuests.length > 0 ? (
          availableQuests.map((quest) => (
            <li key={quest.id}>
              <h3>
                {quest.type.toUpperCase()}: {quest.follower.name}
              </h3>
              <button onClick={onActiveClick(quest)}>Start</button>
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
