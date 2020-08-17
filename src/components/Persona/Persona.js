import React, { useContext, useEffect } from 'react';
import { AvatarContainer, Collection, Follower } from './styled';
import { ReactComponent as AvatarSVG } from 'assets/avatar.svg';
import { useQuery, gql } from '@apollo/client';
import { GameContext } from 'context/game';

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
  const { characters, setFollowersWithDB } = useContext(GameContext);

  useEffect(() => {
    setFollowersWithDB();
  }, [setFollowersWithDB]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <AvatarContainer>
        <AvatarSVG />
      </AvatarContainer>

      <h2>Follower Collection</h2>
      <Collection>
        {characters.map((character) => (
          <Follower key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </Follower>
        ))}
      </Collection>
      <h2>Test Collection</h2>
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
