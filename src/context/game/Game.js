import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from 'context/AuthProvider';
import getUserCharacters from 'base/getUserCharacters';
import getUserQuizzes from 'base/getUserQuizzes';

export const GameContext = React.createContext({
  registered: new Date(),
  followers: [],
  quizzes: [],
  quizRewards: [],
});

export const GameContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const [followers, setFollowers] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getUserCharacters(currentUser.uid).then((res) => setFollowers(res));
      getUserQuizzes(currentUser.uid).then((res) => setQuizzes(res));
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <GameContext.Provider
      value={{
        registered: currentUser?.metadata?.creationTime,
        followers,
        quizzes,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
