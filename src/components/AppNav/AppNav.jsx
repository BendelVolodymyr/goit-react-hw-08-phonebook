import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from '../../hooks/useAuth';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppNav = () => {
  const { isLogIn } = useAuth();

  return (
    <>
      <Navigation />
      {isLogIn ? <UserNav /> : <AuthNav />}
    </>
  );
};
