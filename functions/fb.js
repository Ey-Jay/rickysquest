const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: 'service_account',
      project_id: 'rickysquest-4dae6',
      private_key_id: process.env.REACT_APP_FB_KEY_ID,
      private_key: process.env.REACT_APP_FB_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.REACT_APP_FB_CLIENT_EMAIL,
      client_id: process.env.REACT_APP_FB_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: process.env.REACT_APP_CLIENT_CERT_URL,
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
