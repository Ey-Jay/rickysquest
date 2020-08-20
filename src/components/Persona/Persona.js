import React, { useContext, useEffect } from 'react';
import { AvatarContainer, Collection, Follower } from './styled';
import { ReactComponent as AvatarSVG } from 'assets/avatar.svg';
import { GameContext } from 'context/game';

const Persona = () => {
  const { characters, setFollowersWithDB } = useContext(GameContext);

  useEffect(() => {
    setFollowersWithDB();
    // eslint-disable-next-line
  }, []);

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
    </>
  );
};

export default Persona;
