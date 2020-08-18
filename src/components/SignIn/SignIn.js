import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';

import { Container, Logo } from './styled';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';
import app from '../../base';
import { AuthContext } from '../../context/AuthProvider';

const SignIn = () => {
  const { currentUser } = useContext(AuthContext);
  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn = () => {
    app
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        return fetch('/.netlify/functions/fb', {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify({ action: 'signin', uid: result.user.uid }),
        });
      })
      .then((res) => res.json().then((res) => console.log(res)))
      .catch((error) => {
        console.error(error);
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
