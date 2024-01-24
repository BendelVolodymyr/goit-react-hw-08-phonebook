import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login the Phone Book</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
