import React, { useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Dashboard from 'components/Dashboard';
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
  console.log(currentUser);
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
                  <li>Dashboard</li>
                </NavLink>
                <NavLink to="/questlog">
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
            <PrivateRoute path="/questlog" component={QuestLog} />
            <PrivateRoute exact path="/" component={Dashboard} />
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
