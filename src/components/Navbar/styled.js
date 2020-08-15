import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.color};
  border-bottom: solid 1px ${({ theme }) => theme.border};
  box-shadow: 0 0 7px #00000033, 0 0 21px #00000033;
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
    color: ${({ theme }) => theme.primary};
  }
`;
