import styled from 'styled-components';

export const NoQuests = styled.div`
  background-color: ${({ theme }) => theme.backgroundLight};
  color: ${({ theme }) => theme.colorDark};
  font-weight: 700;
  font-size: 0.9rem;
  text-align: center;
  padding: 20px;
  border-radius: 4px;
`;

export const FinishedQuests = styled.ul`
  margin: 0 0 60px;
  padding: 0;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundLight};
    margin: 0 0 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 4px;
  }

  h3 {
    color: ${({ theme }) => theme.primary};
    margin: 0;
    padding: 0;
    flex: 1;
  }

  button {
    background-color: ${({ theme }) => theme.primaryDark};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color};
    font-weight: 700;
    font-size: 0.7rem;
    padding: 18px 36px;
    cursor: pointer;
    text-transform: uppercase;
    transition: transform 0.1s, background-color 0.2s;
    box-shadow: 1px 2px 3px #00000011, 1px 2px 9px #00000011;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  button:active  {
    background-color: ${({ theme }) => theme.primary};
    transform: scale(0.9);
  }
`;

export const ActiveQuests = styled.ul`
  margin: 0 0 60px;
  padding: 0;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundLight};
    margin: 0 0 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 4px;
  }

  h3 {
    color: ${({ theme }) => theme.colorDark};
    margin: 0;
    padding: 0;
    flex: 1;
  }

  aside {
    background-color: ${({ theme }) => theme.backgroundDark};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colorDark};
    font-weight: 700;
    font-size: 0.7rem;
    padding: 18px 36px;
    text-transform: uppercase;
  }
`;

export const AvailableQuests = styled.ul`
  margin: 0 0 60px;
  padding: 0;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundLight};
    margin: 0 0 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 4px;
  }

  h3 {
    color: ${({ theme }) => theme.primary};
    margin: 0;
    padding: 0;
    flex: 1;
  }

  button {
    background-color: ${({ theme }) => theme.primaryDark};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color};
    font-weight: 700;
    font-size: 0.7rem;
    padding: 18px 36px;
    cursor: pointer;
    text-transform: uppercase;
    transition: transform 0.1s, background-color 0.2s;
    box-shadow: 1px 2px 3px #00000011, 1px 2px 9px #00000011;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  button:active  {
    background-color: ${({ theme }) => theme.primary};
    transform: scale(0.9);
  }

  .quiz {
    border: solid 2px ${({ theme }) => theme.primary};
  }
`;
