import React, { useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Persona from 'components/Persona';
import QuestLog from 'components/QuestLog';
import Quiz from 'components/Quiz';
import EndScreen from 'components/EndScreen';
import SignIn from 'components/SignIn';

import { Navbar, Content } from './App.styled.js';
import { ReactComponent as LogoSVG } from 'assets/rick.svg';

import { QuestContextProvider } from './context/quests';

import app from './base';
import { AuthContext } from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      <QuestContextProvider>
        <Navbar>
          <section>
            <div>
              <LogoSVG />
            </div>
            {currentUser && (
              <ul>
                <NavLink exact to="/">
                  <li>Quests</li>
                </NavLink>
                <NavLink to="/persona">
                  <li>Collection</li>
                </NavLink>
                <button onClick={() => app.auth().signOut()}>
                  <li>Logout</li>
                </button>
              </ul>
            )}
          </section>
        </Navbar>
        <Content>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <PrivateRoute path="/endscreen/:result" component={EndScreen} />
            <PrivateRoute path="/quiz/:questId" component={Quiz} />
            <PrivateRoute path="/persona" component={Persona} />
            <PrivateRoute exact path="/" component={QuestLog} />
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
