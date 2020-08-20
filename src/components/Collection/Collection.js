import React, { useContext } from 'react';
import { AvatarContainer, CollectionContainer, Follower } from './styled';
import { ReactComponent as AvatarSVG } from 'assets/avatar.svg';
import { useQuery, gql } from '@apollo/client';
import { GameContext } from 'context/game';

const GET_CHARACTERS = (ids) => gql`
  query Characters {
    characters(id: [${[...ids]}]) {
      id
      name
      image
    }
  }
`;

const Collection = () => {
  const { followers } = useContext(GameContext);
  const followerIds = followers.map((char) => char.id);

  const { loading, data, error } = useQuery(GET_CHARACTERS(followerIds));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <AvatarContainer>
        <AvatarSVG />
      </AvatarContainer>

      <h2>Follower Collection</h2>
      <CollectionContainer>
        {data.characters.map((character) => (
          <Follower key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </Follower>
        ))}
      </CollectionContainer>
    </>
  );
};

export default Collection;
