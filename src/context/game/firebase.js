import { db } from '../../base';

export const persistFollower = async (fid, uid) => {
  const oldFollowers = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => {
      return res.data().followers;
    })
    .catch((err) => console.error(err));

  return db
    .collection('users')
    .doc(uid)
    .update({
      followers: [...oldFollowers, { id: fid, acquired: new Date() }],
    });
};

export const persistQuest = async (qid, uid) => {
  const oldQuests = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => {
      return res.data().quests;
    })
    .catch((err) => console.error(err));

  return db
    .collection('users')
    .doc(uid)
    .update({
      quests: [...oldQuests, { id: qid, finished: new Date() }],
    });
};
