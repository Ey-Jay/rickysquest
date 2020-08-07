import React, { useState } from 'react';

export const QuestContext = React.createContext([]);

export const QuestContextProvider = ({ children }) => {
  const questRick = {
    finished: false,
    character: 'Rick',
    type: 'quiz',
    questions: [
      {
        question: 'What gender?',
        answers: ['male', 'female', 'diverse'],
        correctAnswerId: 0,
      },
      {
        question: 'Relation to morty?',
        answers: ['grandpa', 'father', 'uncle'],
        correctAnswerId: 0,
      },
    ],
  };

  const questMorty = {
    finished: false,
    character: 'Morty',
    type: 'quiz',
    questions: [
      {
        question: 'What gender?',
        answers: ['male', 'female', 'diverse'],
        correctAnswerId: 0,
      },
      {
        question: 'Relation to rick?',
        answers: ['grandson', 'son', 'nephew'],
        correctAnswerId: 0,
      },
    ],
  };

  const [quests, setQuests] = useState([questRick, questMorty]);

  const setQuestFinished = (index) => {
    const new_quests = [...quests];
    new_quests[index] = { ...quests[index], finished: true };
    setQuests(new_quests);
  };

  const finishedQuests = quests.filter((x) => x.finished);
  const unfinishedQuests = quests.filter((x) => !x.finished);

  return (
    <QuestContext.Provider
      value={{
        quests: quests,
        finishedQuests,
        unfinishedQuests,
        setQuestFinished,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
};
