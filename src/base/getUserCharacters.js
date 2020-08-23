import { db } from './index';

async function getUserCharacters(uid) {
  return await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => res.data()?.followers || [])
    .catch((err) => {
      throw new Error(err);
    });
}

export default getUserCharacters;
