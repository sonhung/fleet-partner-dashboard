import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

const LayoutContainer = styled.div`
  margin: 0;
`;

const HeaderContainer = styled.div`
  height: 50px;
`

const MainContent = styled.div`
  min-height: calc(100vh - 50px - 60px);
`

const FooterContainer = styled.div`
  height: 60px;
`

const Layout = props => {
  return (
    <LayoutContainer >
      <HeaderContainer >
        <Header />
      </HeaderContainer>
      <MainContent>{props.children}</MainContent>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout;