import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isLogIn, user } = useAuth();
  return (
    <>
      <div className="home-not-auth">
        {isLogIn ? (
          <h1 className="home-not-auth__title">Welcome {user.name}</h1>
        ) : (
          <h1 className="home-not-auth__title"> Welcome to Phone Book</h1>
        )}
        <div className="home-not-auth__box-link">
          {!isLogIn ? (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/register">Create an account</Link>
            </>
          ) : (
            false
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
