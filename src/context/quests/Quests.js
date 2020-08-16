import React, { useState } from "react";

import Quests from "data/quests";

export const QuestContext = React.createContext([]);

export const QuestContextProvider = ({ children }) => {
  const [quests, setQuests] = useState(Quests);

  const setQuestFinished = (quest) => {
    const new_quests = [...quests];
    const index = new_quests.findIndex((q) => q.id === quest.id);
    new_quests[index] = {
      ...new_quests[index],
      finished: true,
      available: false,
    };
    setQuests(new_quests);
  };
  /*
  const finishedQuests = quests.filter((x) => x.finished);
  const unfinishedQuests = quests.filter((x) => !x.finished);

*/

  return (
    <QuestContext.Provider
      value={{
        quests,
        setQuests,
        setQuestFinished,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
};
