import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthContext } from 'context/AuthProvider';
import PrivateRoute from 'components/PrivateRoute';

import Persona from 'components/Persona';
import QuestLog from 'components/QuestLog';
import QuestMenu from 'components/QuestMenu';
// import EndScreen from 'components/EndScreen';
import SignIn from 'components/SignIn';
import Navbar from 'components/Navbar';

import { Content } from './App.styled.js';

import getCharacterData from 'base/getCharacterData';

function App() {
  const { currentUser } = useContext(AuthContext);
  getCharacterData(1).then((res) => console.log(res));
  return (
    <div className="App">
      {currentUser && <Navbar />}
      <Content>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute path="/quest/:questId" component={QuestMenu} />
          <PrivateRoute path="/persona" component={Persona} />
          <PrivateRoute exact path="/" component={QuestLog} />
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </Content>
    </div>
  );
}

export default App;
