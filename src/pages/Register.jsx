import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default Register;
