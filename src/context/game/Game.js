import React, { useState } from 'react';

import allQuests from 'data/quests';

export const GameContext = React.createContext([]);

export const GameContextProvider = ({ children }) => {
  const [quests, setQuests] = useState(allQuests);

  const [characters, setCharacters] = useState([]);

  const setQuestFinished = (quest) => {
    const new_quests = [...quests];
    const index = new_quests.findIndex((q) => q.id === quest.id);
    new_quests[index] = {
      ...new_quests[index],
      finished: true,
      available: false,
    };
    setCharacters([...characters, quest.follower]);
    setQuests(new_quests);
  };

  return (
    <GameContext.Provider
      value={{
        quests,
        setQuestFinished,
        characters,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
