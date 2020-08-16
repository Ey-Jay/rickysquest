const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FB_CLIENT_EMAIL,
      privateKey:
        process.env.FB_KEY[0] === '-'
          ? process.env.FB_KEY
          : JSON.parse(process.env.FB_KEY),
      projectId: 'rickysquest-4dae6',
    }),
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
