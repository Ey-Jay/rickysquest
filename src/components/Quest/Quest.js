import React, { useContext } from "react";

import { QuestContext } from "context/quests";
import Quiz from "./Quiz";
import { useParams } from "react-router-dom";
import EndScreen from "components/EndScreen";

const Quest = () => {
  const { quests } = useContext(QuestContext);
  const { questId } = useParams();

  const quest = quests.find((q) => q.id === questId);
  return (
    <div>
      {!quest.finished && quest.type === "quiz" && <Quiz quest={quest}></Quiz>}
      {quest.type === "adventure" && (
        <h1>Adventure quests have not been implemented yet</h1>
      )}
      {quest.finished && <EndScreen quest={quest}></EndScreen>}
    </div>
  );
};

export default Quest;
