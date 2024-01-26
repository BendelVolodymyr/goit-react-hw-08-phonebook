import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet';

const HomeInAuth = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>Welcome to your phone book</title>
      </Helmet>
      <div className="home-in-auth">
        <h1>Welcome {user.name}</h1>
      </div>
    </>
  );
};

export default HomeInAuth;
