import styled from 'styled-components';

export const Question = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const Answers = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Option = styled.li`
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
