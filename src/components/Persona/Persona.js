import React from 'react';
import { Container, AvatarContainer, Collection, Follower } from './styled';
import { ReactComponent as AvatarSVG } from 'assets/avatar.svg';
import { useQuery, gql } from '@apollo/client';

const CHARACTERS = gql`
  query {
    characters {
      results {
        image
        id
        name
      }
    }
  }
`;

const Persona = () => {
  const { loading, error, data } = useQuery(CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <AvatarContainer>
        <AvatarSVG />
      </AvatarContainer>
      <h2>Follower Collection</h2>
      <Collection>
        {data.characters.results.map((item) => (
          <Follower key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Follower>
        ))}
      </Collection>
    </>
  );
};

export default Persona;
