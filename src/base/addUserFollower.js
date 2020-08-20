import { db } from './index';

async function addUserFollower(fid, uid) {
  const followers = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => res.data().followers)
    .catch((err) => {
      throw new Error(err);
    });

  return await db
    .collection('users')
    .doc(uid)
    .update({
      followers: [...followers, { id: fid, acquired: new Date() }],
    })
    .then(() => true)
    .catch((err) => {
      throw new Error(err);
    });
}

export default addUserFollower;
