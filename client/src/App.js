import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Dashboard from 'components/Dashboard';
import Persona from 'components/Persona';
import QuestLog from 'components/QuestLog';
import Quiz from 'components/Quiz';
import EndScreen from 'components/EndScreen';
import SignIn from 'components/SignIn';

import { Navbar, Content } from './App.styled.js';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';

import QuestContext, { QuestContextProvider } from './context/quests';

function App() {
  return (
    <div className="App">
      <QuestContextProvider>
        <Navbar>
          <section>
            <div>
              <LogoSVG />
            </div>
            <ul>
              <NavLink exact to="/">
                <li>Dashboard</li>
              </NavLink>
              <NavLink to="/questlog">
                <li>Quests</li>
              </NavLink>
              <NavLink to="/persona">
                <li>Collection</li>
              </NavLink>
            </ul>
          </section>
        </Navbar>
        <Content>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/endscreen/:result">
              <EndScreen />
            </Route>
            <Route path="/quiz/:questId">
              <Quiz />
            </Route>
            <Route path="/persona">
              <Persona />
            </Route>
            <Route path="/questlog">
              <QuestLog />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </Content>
      </QuestContextProvider>
    </div>
  );
}

export default App;
