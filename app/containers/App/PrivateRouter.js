import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';

const PrivateRoute = ({ children, ...rest }) => {
  const login = window.localStorage.getItem('token') || '';
  if (isEmpty(login)) {
    return (
      <Route>
        <Redirect to={{ pathname: '/login' }} />
      </Route>
    );
  }

  return (
    <Layout>
      <Route {...rest} render={() => children} />
    </Layout>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
