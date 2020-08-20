import { db } from './index';

async function getCharacterData(id) {
  return await db
    .collection('characters')
    .where('id', '==', id)
    .get()
    .then((docArray) => docArray.docs[0].data())
    .catch((err) => console.error(err));
}

export default getCharacterData;
