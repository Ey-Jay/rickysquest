import React, { useState } from "react";

import Quests from "data/quests";

export const GameContext = React.createContext([]);

export const GameContextProvider = ({ children }) => {
  const [quests, setQuests] = useState(Quests);

  const [characters, setCharacters] = useState([]);

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
    <GameContext.Provider
      value={{
        quests,
        setQuests,
        setQuestFinished,
        characters,
        setCharacters,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
