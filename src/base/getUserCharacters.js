import { db } from './index';
import getCharacterData from './getCharacterData';

async function getUserCharacters(uid) {
  const userCharsArray = await db
    .collection('users')
    .doc(uid)
    .get()
    .then((res) => {
      return res.data().followers;
    })
    .catch((err) => {
      throw new Error(err);
    });

  return await userCharsArray.map(
    async (char) => await getCharacterData(char.id)
  );
}

export default getUserCharacters;
