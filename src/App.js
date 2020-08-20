import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthContext } from 'context/AuthProvider';
import PrivateRoute from 'components/PrivateRoute';

import Collection from 'components/Collection';
import QuestLog from 'components/QuestLog';
import QuestMenu from 'components/QuestMenu';
import SignIn from 'components/SignIn';
import Navbar from 'components/Navbar';

import { Content } from './App.styled.js';

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      {currentUser && <Navbar />}
      <Content>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute path="/quest/:questId" component={QuestMenu} />
          <PrivateRoute path="/collection" component={Collection} />
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
