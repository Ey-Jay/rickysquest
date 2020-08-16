import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AuthProvider } from "context/AuthProvider";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "theme";
import { QuestContextProvider } from "context/quests";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <QuestContextProvider>
            <Router>
              <GlobalStyles />
              <App />
            </Router>
          </QuestContextProvider>
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
