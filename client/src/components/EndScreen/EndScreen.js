import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import { useParams, Redirect } from 'react-router-dom';

const EndScreen = () => {
  const { result } = useParams();

  const [redirect, setRedirect] = useState(false);

  return (
    <Container>
      {redirect && <Redirect to="/" />}
      <h3>Endscreen</h3>
      {(result === 'success' && 'You have been successful!') ||
        'You have failed!'}
      <br />

      <button onClick={() => setRedirect(true)}> Go to dashboard </button>
    </Container>
  );
};

export default EndScreen;
