import React, { useContext } from "react";

import { QuestContext } from "context/quests";
import Quiz from "./Quiz";
import { useParams } from "react-router-dom";

const Quest = () => {
  const { quests } = useContext(QuestContext);
  const { questId } = useParams();

  const quest = quests.find((q) => q.id === questId);
  return (
    <div>
      {quest.type === "quiz" && <Quiz quest={quest}></Quiz>}
      {quest.type === "adventure" && (
        <h1>Adventure quests have not been implemented yet</h1>
      )}
    </div>
  );
};

export default Quest;
