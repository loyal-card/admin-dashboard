import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteWithLayout } from '../components';
import useAuth from '../hook/authhook';

const PrivateRoute = props => {
  const { layout: Layout, component: Component, path: path, ...rest } = props;
  const [{ authenticated }] = useAuth();
  return (
    <Route
      {...props}
      render={(matchProps) => 
        authenticated ? (
          <RouteWithLayout
            component={Component}
            layout={Layout}
            path={path}
          />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
      }
    />
  );
};

export default PrivateRoute;