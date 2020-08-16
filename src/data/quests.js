import adventures from './adventures';

import questions from './questions';

import { quizFollowers, adventureFollowers } from './followers';

const quiz_quests = quizFollowers.map((follower, index) => ({
  id: 'quiz-' + index,
  type: 'quiz',
  active: false,
  available: true,
  finished: false,

  follower: quizFollowers[index],
  questions: [questions[index]],
}));

const adventure_quests = quizFollowers.map((follower, index) => ({
  id: 'adventure-' + index,

  type: 'adventure',
  active: false,
  available: true,
  finished: false,
  follower: adventureFollowers[index],
  adventure: adventures[index],
}));

const quests = [...quiz_quests, ...adventure_quests];

export default quests;
