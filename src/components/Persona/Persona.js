import React, { useContext, useEffect } from 'react';
import { AvatarContainer, Collection, Follower } from './styled';
import { ReactComponent as AvatarSVG } from 'assets/avatar.svg';
import { useQuery, gql } from '@apollo/client';
// import { GameContext } from 'context/game';

const GET_CHARACTERS = (ids) => gql`
  query Characters {
    characters(id: [${[...ids]}]) {
      id
      name
      image
    }
  }
`;

const Persona = () => {
  const { loading, data, error } = useQuery(
    GET_CHARACTERS([7, 8, 345, 234, 123])
  );
  // const { characters, setFollowersWithDB } = useContext(GameContext);

  // useEffect(() => {
  //   setFollowersWithDB();
  //   // eslint-disable-next-line
  // }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AvatarContainer>
        <AvatarSVG />
      </AvatarContainer>

      <h2>Follower Collection</h2>
      <Collection>
        {data.characters.map((character) => (
          <Follower key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </Follower>
        ))}
      </Collection>
    </>
  );
};

export default Persona;
