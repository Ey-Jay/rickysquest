import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #111;
  color: #fff;
  height: 70px;
  padding: 0 20px;

  section {
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }

  ul {
    flex: 1;
    margin: 0;
    padding: 0;
    text-align: right;
  }

  li {
    margin: 0;
    padding: 0;
    display: inline-block;
    padding: 20px;
    font-weight: 700;
  }

  a.active {
    color: #72e85d;
  }
`;

export const Content = styled.main`
  margin: 0 auto;
  max-width: 650px;
  padding: 40px 20px;
`;
