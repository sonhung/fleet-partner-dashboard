import React from 'react';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function Header() {
  return (
    <div>
      <section>
        <FormattedMessage {...messages.title} />
      </section>
      <section>
        <LocaleToggle />
      </section>
    </div>
  );
}

export default Header;
