import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#1ed760',
  primaryDark: '#1db954',
  color: '#ffffff',
  colorDark: '#b3b3b3',
  background: '#191414',
  backgroundDark: '#121212',
  backgroundLight: '#212121',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @import url('https://rsms.me/inter/inter.css');

  html {
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #111;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
