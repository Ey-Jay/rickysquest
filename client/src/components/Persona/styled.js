import styled from 'styled-components';

export const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #efefef;
  margin: 0 auto 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Collection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Follower = styled.article`
  margin: 0 5px 15px 0;

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
  }
`;
