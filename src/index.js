import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'context/AuthProvider';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'theme';
import { GameContextProvider } from 'context/game';

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
