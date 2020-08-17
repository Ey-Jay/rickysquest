import React, { useState, useContext } from 'react';

import allQuests from 'data/quests';
import { gainFollower } from './firebase';
import { AuthContext } from '../../context/AuthProvider';

export const GameContext = React.createContext([]);

export const GameContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const [quests, setQuests] = useState(allQuests);
  const [characters, setCharacters] = useState([]);

  const setQuestFinished = (quest) => {
    const newQuests = [...quests];
    const index = newQuests.findIndex((q) => q.id === quest.id);
    newQuests[index] = {
      ...newQuests[index],
      finished: true,
      available: false,
    };
    gainFollower(index, currentUser.uid);
    setCharacters([...characters, quest.follower]);
    setQuests(newQuests);
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
