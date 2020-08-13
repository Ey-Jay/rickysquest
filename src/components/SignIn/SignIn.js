import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import * as firebase from 'firebase/app';

import { Container, Logo } from './styled';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';
import app, { db } from '../../base';
import { AuthContext } from '../../context/AuthProvider';

const INITIAL_FOLLOWERS = gql`
  query Characters {
    characters {
      results {
        name
      }
    }
  }
`;

const SignIn = () => {
  const { data } = useQuery(INITIAL_FOLLOWERS);
  const { currentUser } = useContext(AuthContext);
  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn = () => {
    app
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        return db
          .collection('users')
          .doc(result.user.uid)
          .set({
            followers: data.characters.results
              .slice(0, 3)
              .map((char) => char.name),
          });
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = result.credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // ...
        // history.push('/');
      })
      .then(() => {
        console.log('succesfully signup');
      })
      .catch((error) => {
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
