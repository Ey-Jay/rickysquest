import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Logo } from './styled';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';
import * as firebase from 'firebase/app';
import app from '../../base';

import { AuthContext } from '../../context/AuthProvider';

const SignIn = () => {
  const { currentUser } = useContext(AuthContext);
  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn = () => {
    app
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // ...
        // history.push('/');
      })
      .catch(function (error) {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // // ...
      });
  };

  if (currentUser) return <Redirect to="/" />;

  return (
    <>
      <Logo>
        <LogoSVG />
      </Logo>
      <Container>
        <button onClick={signIn}>Login/Signup</button>
      </Container>
    </>
  );
};

export default SignIn;
