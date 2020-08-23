import React from 'react';
import { Follower, HomeButton } from './styled';
import { useHistory } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTER = (id) => gql`
  query Character {
    character(id: ${id}) {
      id
      name
      image
    }
  }
`;

const EndScreen = ({ outcome, quizData }) => {
  const { loading, data, error } = useQuery(GET_CHARACTER(quizData.reward));

  const history = useHistory();
  const onClickHandler = () => history.push('/collection');

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1 style={{ textTransform: 'capitalize' }}>{outcome}</h1>

      {outcome === 'success' ? (
        <>
          <div>
            <strong>You were successful! </strong>
            Your reward:
          </div>
          <Follower>
            <img src={data.character.image} alt="" />
            <p>{data.character.name}</p>
          </Follower>
        </>
      ) : (
        <div style={{ marginBottom: '40px' }}>
          <strong>You have failed.</strong> Better luck next time.
        </div>
      )}

      <div style={{ textAlign: 'center' }}>
        <HomeButton onClick={onClickHandler}> Go to Collection </HomeButton>
      </div>
    </>
  );
};

export default EndScreen;
