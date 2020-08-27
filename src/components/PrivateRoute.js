import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import SignIn from './SignIn';

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <SignIn {...routeProps}></SignIn>
        )
      }
    />
  );
}

export default PrivateRoute;
