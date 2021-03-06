import styled from 'styled-components';

export const Follower = styled.article`
  margin: 40px auto;
  max-width: 80px;

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }

  p {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 0.7rem;
    text-align: center;
    word-wrap: break-word;
  }
`;

export const HomeButton = styled.button`
  background-color: ${({ theme }) => theme.primaryDark};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  font-size: 0.7rem;
  padding: 18px 36px;
  cursor: pointer;
  transition: transform 0.1s, background-color 0.2s;
  box-shadow: 1px 2px 3px #00000011, 1px 2px 9px #00000011;
  text-align: center;
  margin-bottom: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &:active  {
    background-color: ${({ theme }) => theme.primary};
    transform: scale(0.9);
  }
`;
