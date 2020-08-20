import { db } from './index';

async function getQuizData(id) {
  return await db
    .collection('quizzes')
    .doc(id.toString())
    .get()
    .then((doc) => doc.data())
    .catch((err) => {
      return console.error(err);
    });
}

export default getQuizData;
