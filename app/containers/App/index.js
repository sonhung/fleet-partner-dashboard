import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import Listuser from 'containers/ListUsers';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0;
`;

const HeaderContainer = styled.div`
  height: 50px;
`

const MainContent = styled.div`
  min-height:  calc(100vh - 50px - 60px);
`

const FooterContainer = styled.div`
  height: 60px;
`

export default function App() {
  return (
    <AppWrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={Listuser} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </MainContent>
      <FooterContainer>
        <Footer />
      </FooterContainer>
      <GlobalStyle />
    </AppWrapper>
  );
}
