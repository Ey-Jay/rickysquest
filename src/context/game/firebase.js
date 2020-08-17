import { db } from '../../base';

export const gainFollower = async (fid, uid) => {
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
    .set({
      followers: [...oldFollowers, { id: fid, acquired: new Date() }],
    });
};
