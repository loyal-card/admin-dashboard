import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteWithLayout } from '../components';
import useAuth from '../hook/authhook';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ authenticated }] = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <RouteWithLayout {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;