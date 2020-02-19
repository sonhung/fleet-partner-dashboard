import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const HomePage = props => {
  const { title = 'home page' } = props;

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>{title}</div>
    </article>
  );
};

HomePage.propTypes = {
  title: PropTypes.string,
};

export default HomePage;
