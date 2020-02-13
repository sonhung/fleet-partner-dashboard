import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 30px;
`

const Menu = styled.div`
  a {
    margin: 0 10px;
  }
`

function Header() {
  return (
    <Container>
      <div>
        <FormattedMessage {...messages.title} />
      </div>
      <Menu>
        <Link to="/">Home page</Link>
        <Link to="/users">List user</Link>
      </Menu>
      <div>
        <LocaleToggle />
      </div>
    </Container>
  );
}

export default Header;