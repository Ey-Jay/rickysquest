import { db } from './index';
import getQuizData from './getQuizData';
import addUserQuest from './addUserQuest';
import addUserFollower from './addUserFollower';

async function solveQuiz(qid, answer, uid) {
  const quizData = await getQuizData(qid);

  if (quizData.answers[0] === answer) {
    await addUserQuest(qid, uid);
    await addUserFollower(quizData.reward, uid);
    return true;
  } else {
    return false;
  }
}

export default solveQuiz;
