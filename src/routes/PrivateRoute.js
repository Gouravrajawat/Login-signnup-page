import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  debugger
  return (

    <Route {...rest} render={props => (
      isLogin() ?
        <Component {...props} />
        : <Redirect to="/dashboard" />
    )} />
  );
};

export default PrivateRoute;


































/*import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_SUCESS } from '../actions/action.types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      LOGIN_SUCESS ?
        <Component {...props} />
        : <Redirect to="/dashboard" />
    )} />
  );
};

export default PrivateRoute;
*/