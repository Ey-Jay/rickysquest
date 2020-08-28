import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from 'context/AuthContext';
import PrivateRoute from 'components/PrivateRoute';

import Collection from 'components/Collection';
import QuestLog from 'components/QuestLog';
import QuestMenu from 'components/Quiz';
import Navbar from 'components/Navbar';

import { Content } from './App.styled.js';

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      {currentUser && <Navbar />}
      <Content>
        <Switch>
          <PrivateRoute path="/quiz/:quizId" component={QuestMenu} />
          <PrivateRoute path="/collection" component={Collection} />
          <PrivateRoute exact path="/" component={QuestLog} />

          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Content>
    </div>
  );
}

export default App;
