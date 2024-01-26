import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from '../../hooks/useAuth';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import style from './AppNav.module.css';

export const AppNav = () => {
  const { isLogIn } = useAuth();

  return (
    <>
      <header className={style.header}>
        <div className={style.header__box}>
          <Navigation />
          {isLogIn ? <UserNav /> : <AuthNav />}
        </div>
      </header>
    </>
  );
};
