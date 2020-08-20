import { db } from './index';

async function getUserQuizzes(uid) {
  const quizSnapshot = await db.collection('quizzes').get();
  const allQuizzes = quizSnapshot.docs.map((doc) => doc.data());

  const userQuestArray = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => {
      return res.data().quests;
    })
    .catch((err) => {
      throw new Error(err);
    });

  function isQuestCompleted(questId) {
    return !!userQuestArray.find((item) => item.id === questId);
  }

  return allQuizzes.map((quiz) => ({
    ...quiz,
    isDone: isQuestCompleted(quiz.id),
  }));
}

export default getUserQuizzes;
