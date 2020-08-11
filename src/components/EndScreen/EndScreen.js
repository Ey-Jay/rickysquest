import React from 'react';
import { Follower, HomeButton } from './styled';
import { useParams, useHistory } from 'react-router-dom';

import adventures from 'data/adventures';

const EndScreen = () => {
  const history = useHistory();
  const { result } = useParams();

  const onClickHandler = () => history.push('/');

  return (
    <>
      <h1>Finished: {adventures[0].title}</h1>

      {result === 'success' ? (
        <>
          <div>
            <strong>You were successful! </strong>
            Your reward:
          </div>
        </>
      ) : (
        <div style={{ marginBottom: '40px' }}>
          <strong>You have failed.</strong> Better luck next time.
        </div>
      )}

      {result === 'success' ? (
        <Follower>
          <img
            src='https://rickandmortyapi.com/api/character/avatar/396.jpeg'
            alt=''
          />
          <p>Scary Teacher</p>
        </Follower>
      ) : null}
      <div style={{ textAlign: 'center' }}>
        <HomeButton onClick={onClickHandler}> Go to dashboard </HomeButton>
      </div>
    </>
  );
};

export default EndScreen;
