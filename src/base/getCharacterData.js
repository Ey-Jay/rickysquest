import { db } from './index';

async function getCharacterData(id) {
  return await db
    .collection('characters')
    .where('id', '==', id)
    .get()
    .then((docArray) => {
      let returnData;

      docArray.forEach((doc) => {
        const data = doc.data();
        returnData = { ...data };
      });

      return returnData;
    })
    .catch((err) => {
      return console.error(err);
    });
}

export default getCharacterData;
