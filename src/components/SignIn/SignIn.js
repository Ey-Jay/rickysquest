import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import * as firebase from 'firebase/app';

import {
  Container,
  Logo,
  GoogleButton,
  GoogleIconWrapper,
  GoogleIcon,
  ButtonText,
} from './styled';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';
import app from '../../base';
import { AuthContext } from 'context/AuthContext';

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

  const history = useHistory();

  if (currentUser) {
    const path = history.location.pathname;
    const pathIsSignIn = /signin/g.test(path);
    return <Redirect to={pathIsSignIn ? '/' : path}></Redirect>;
  }

  return (
    <>
      <Logo>
        <LogoSVG />
      </Logo>
      <Container>
        <GoogleButton onClick={signIn}>
          <GoogleIconWrapper>
            <GoogleIcon
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </GoogleIconWrapper>
          <ButtonText>
            <span>Sign in with Google</span>
          </ButtonText>
        </GoogleButton>
      </Container>
    </>
  );
};

export default SignIn;
