import React, { useState, useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { AuthContext } from 'context/AuthProvider';
import getUserCharacters from 'base/getUserCharacters';
import getUserQuizzes from 'base/getUserQuizzes';

const GET_CHARACTERS = (ids) => gql`
  query Characters {
    characters(id: [${[...ids]}]) {
      id
      name
      image
    }
  }
`;

export const GameContext = React.createContext({
  registered: new Date(),
  followers: [],
  quizzes: [],
  api: {
    loading: true,
    error: null,
    data: null,
  },
});

export const GameContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const [followerIds, setFollowerIds] = useState([]);
  const { loading, data, error } = useQuery(GET_CHARACTERS(followerIds));

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getUserCharacters(currentUser.uid).then((res) => {
        const newArray = res.map((item) => item.id);
        setFollowerIds(newArray);
      });

      getUserQuizzes(currentUser.uid).then((res) => setQuizzes(res));
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <GameContext.Provider
      value={{
        registered: currentUser?.metadata?.creationTime,
        followers: data?.characters,
        quizzes,
        api: {
          loading,
          error,
        },
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
