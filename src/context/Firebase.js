import React, { createContext, useEffect } from 'react';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../config/firebaseConfig';

export const FirebaseContext = createContext();

const provider = new firebase.auth.GoogleAuthProvider();

export default function FirebaseContextProvider({ children }) {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // db.collection('test')
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.forEach((doc) => {
    //       console.log(doc.data());
    //     });
    //   });

    // THIS WORKS
    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then(function (result) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     // ...
    //   })
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
  }, []);

  return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>;
}
