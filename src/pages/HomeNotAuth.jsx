import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomeNotAuth = () => {
  return (
    <>
      <Helmet>
        <title>Home Phone Book </title>
      </Helmet>
      <div className="home-not-auth">
        <h1 className="home-not-auth__title">Welcome to Phone Book</h1>
        <div className="home-not-auth__box-link">
          <Link to="/login">Sign in</Link>
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </>
  );
};

export default HomeNotAuth;
