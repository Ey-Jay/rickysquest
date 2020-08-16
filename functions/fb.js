const admin = require('firebase-admin');

const serviceAccount = require('../keys/serviceAccount.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const firestore = admin.firestore();

exports.handler = async (event) => {
  await firestore
    .collection('users')
    .doc(event.body)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        firestore
          .collection('users')
          .doc(event.body)
          .set({
            followers: [
              { id: 1, name: 'Rick Sanchez' },
              { id: 2, name: 'Morty Smith' },
              { id: 3, name: 'Beth Smith' },
            ],
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log('error', err));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'success' }),
  };
};
