import React from 'react';
import { Container, AvatarContainer, Collection, Follower } from './styled';
import { ReactComponent as AvatarSVG } from 'assets/avatar.svg';

const Persona = () => (
  <>
    <AvatarContainer>
      <AvatarSVG />
    </AvatarContainer>
    <h2>Follower Collection</h2>
    <Collection>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <Follower key={item}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
            alt="toxic rick"
          />
          <p>Toxic Rick</p>
        </Follower>
      ))}
    </Collection>
  </>
);

export default Persona;
