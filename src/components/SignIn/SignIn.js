import React from 'react';
import { Container, Logo } from './styled';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';

const SignIn = () => (
  <>
    <Logo>
      <LogoSVG />
    </Logo>
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* FIREBASE LOGIN SHIT */}
      </form>
    </Container>
  </>
);

export default SignIn;
