import React from 'react';
import { Helmet } from 'react-helmet';

const LoginPage = ({history}) => {
  const handleLogin = () => {
    window.localStorage.setItem('token', 'token');
    history.push('/');
  }
  return (
    <article>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div>
        login page
        <button onClick={handleLogin}>Login</button>
      </div>
    </article>
  );
}

export default LoginPage;
