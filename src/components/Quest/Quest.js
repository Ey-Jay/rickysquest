import React, { useContext } from "react";

import { QuestContext } from "context/quests";

const Quest = () => {
  const { quest } = useContext(QuestContext);
  console.log(quest);
  return <div></div>;
};

export default Quest;
