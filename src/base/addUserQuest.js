import { db } from './index';

async function addUserQuest(qid, uid) {
  const quests = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => res.data().quests)
    .catch((err) => {
      throw new Error(err);
    });

  return await db
    .collection('users')
    .doc(uid)
    .update({
      quests: [...quests, { id: qid, finished: new Date() }],
    })
    .then(() => true)
    .catch((err) => {
      throw new Error(err);
    });
}

export default addUserQuest;
