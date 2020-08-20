import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'context/AuthProvider';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'theme';
import { GameContextProvider } from 'context/game';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GameContextProvider>
          <Router>
            <GlobalStyles />
            <App />
          </Router>
        </GameContextProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
