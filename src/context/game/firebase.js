import { db } from '../../base';

export const getFollowersFromDB = async (uid) => {
  const followers = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => {
      return res.data().followers;
    })
    .catch((err) => console.error(err));

  return followers;
};

export const getQuestsFromDB = async (uid) => {
  const quests = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => {
      return res.data().quests;
    })
    .catch((err) => console.error(err));

  return quests;
};

export const persistFollower = async (fid, uid) => {
  const oldFollowers = await getFollowersFromDB(uid);

  return db
    .collection('users')
    .doc(uid)
    .update({
      followers: [...oldFollowers, { id: fid, acquired: new Date() }],
    });
};

export const persistQuest = async (qid, uid) => {
  const oldQuests = await getQuestsFromDB(uid);

  return db
    .collection('users')
    .doc(uid)
    .update({
      quests: [...oldQuests, { id: qid, finished: new Date() }],
    });
};
