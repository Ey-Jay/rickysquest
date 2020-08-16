import React, { useContext } from "react";

import { GameContext } from "context/game";
import Quiz from "./Quiz";
import { useParams } from "react-router-dom";
import EndScreen from "components/EndScreen";

const QuestMenu = () => {
  const { quests, setQuestFinished } = useContext(GameContext);
  const { questId } = useParams();

  const onSuccess = () => {
    setQuestFinished(quest);
  };

  const quest = quests.find((q) => q.id === questId);
  return (
    <div>
      {!quest.finished && quest.type === "quiz" && (
        <Quiz {...{ quest, onSuccess }}></Quiz>
      )}
      {quest.type === "adventure" && (
        <h1>Adventure quests have not been implemented yet</h1>
      )}
      {quest.finished && <EndScreen quest={quest}></EndScreen>}
    </div>
  );
};

export default QuestMenu;
