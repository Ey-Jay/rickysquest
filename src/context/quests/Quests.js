import React, { useState } from "react";

export const QuestContext = React.createContext([]);

export const QuestContextProvider = ({ children }) => {
  const [quest, setQuest] = useState();

  /*
  const setQuestFinished = (index) => {
    const new_quests = [...quests];
    new_quests[index] = { ...quests[index], finished: true };
    setQuests(new_quests);
  };

  const finishedQuests = quests.filter((x) => x.finished);
  const unfinishedQuests = quests.filter((x) => !x.finished);

  const getQuestById = (id) => {
    return quests.filter((x) => x.id === id)[0];
  };
*/
  return (
    <QuestContext.Provider
      value={{
        quest,
        setQuest,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
};
