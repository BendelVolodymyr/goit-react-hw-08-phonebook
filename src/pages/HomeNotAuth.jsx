import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomeNotAuth = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Phone Book </title>
      </Helmet>
      <h1>Welcome to Phone Book</h1>
      <Link to="/modal">Get start</Link>
    </>
  );
};

export default HomeNotAuth;
