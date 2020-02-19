import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const LoginPage = ({ history }) => {
  const handleLogin = () => {
    window.localStorage.setItem('token', 'token');
    history.push('/');
  };
  return (
    <article>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div>
        login page
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </article>
  );
};

LoginPage.propTypes = {
  history: PropTypes.object,
};

export default LoginPage;
