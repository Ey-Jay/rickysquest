import styled from 'styled-components';

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.backgroundLight};
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 100px;

  svg {
    height: 70px;
  }
`;

export const Container = styled.div`
  text-align: center;
`;

export const GoogleButton = styled.div`
  width: 184px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  padding: 1px;
  display: inline-flex;
  user-select: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  &:active {
    background: #1669f2;
  }
`;

export const GoogleIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoogleIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const ButtonText = styled.p`
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: 'Roboto';
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
`;
