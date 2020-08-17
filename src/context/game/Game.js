import React, { useState, useContext, useEffect } from 'react';

import allQuests from 'data/quests';
import { allFollowers } from 'data/followers';
import {
  getFollowersFromDB,
  getQuestsFromDB,
  persistFollower,
  persistQuest,
} from './firebase';
import { AuthContext } from '../../context/AuthProvider';

export const GameContext = React.createContext([]);

export const GameContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const [quests, setQuests] = useState(allQuests);
  const [characters, setCharacters] = useState([]);

  async function setFollowersWithDB() {
    if (currentUser) {
      const followersFromDB = await getFollowersFromDB(currentUser.uid);

      const newFollowers = followersFromDB.map((item) => {
        return allFollowers.find((foll) => item.id === foll.id);
      });

      setCharacters(newFollowers);
    }
  }

  async function setQuestsWithDB() {
    if (currentUser) {
      const newQuests = [...allQuests];
      const questsFromDB = await getQuestsFromDB(currentUser.uid);

      questsFromDB.forEach((item) => {
        newQuests[item.id].finished = true;
        newQuests[item.id].available = false;
      });

      setQuests(newQuests);
    }
  }

  useEffect(() => {
    setFollowersWithDB();
    setQuestsWithDB();
  }, [currentUser]);

  const setQuestFinished = (quest) => {
    const newQuests = [...quests];
    const index = newQuests.findIndex((q) => q.id === quest.id);
    newQuests[index] = {
      ...newQuests[index],
      finished: true,
      available: false,
    };
    persistFollower(quest.follower.id, currentUser.uid);
    persistQuest(index, currentUser.uid);
    setCharacters([...characters, quest.follower]);
    setQuests(newQuests);
  };

  return (
    <GameContext.Provider
      value={{
        quests,
        setQuestFinished,
        characters,
        setFollowersWithDB,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
