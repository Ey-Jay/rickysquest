import styled from 'styled-components';

export const NoQuests = styled.div`
  background-color: #f7f7f7;
  color: #666;
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
    background-color: #efefef;
    margin: 0 0 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 4px;
  }

  h3 {
    margin: 0;
    padding: 0;
    flex: 1;
  }

  button {
    background-color: #72e85d;
    border: none;
    border-radius: 4px;
    color: #336b29;
    font-weight: 700;
    font-size: 0.7rem;
    padding: 18px 36px;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

export const ActiveQuests = styled.ul`
  margin: 0 0 60px;
  padding: 0;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    background-color: #efefef;
    margin: 0 0 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 4px;
  }

  h3 {
    margin: 0;
    padding: 0;
    flex: 1;
  }

  aside {
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    color: #666;
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
    background-color: #efefef;
    margin: 0 0 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 4px;
  }

  h3 {
    margin: 0;
    padding: 0;
    flex: 1;
  }

  button {
    background-color: #72e85d;
    border: none;
    border-radius: 4px;
    color: #336b29;
    font-weight: 700;
    font-size: 0.7rem;
    padding: 18px 36px;
    cursor: pointer;
    text-transform: uppercase;
  }

  .quiz {
    background-color: #72e85d;

    button {
      background-color: #00000044;
      color: #fff;
    }
  }
`;
