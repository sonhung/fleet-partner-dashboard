import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRouter';
import HomePage from 'containers/HomePage';
import Listuser from 'containers/ListUsers';
import LoginPage from 'containers/Login';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute path="/users" component={Listuser} />
        <Route path="/login" component={LoginPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
