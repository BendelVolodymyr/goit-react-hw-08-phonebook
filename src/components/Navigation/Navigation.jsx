import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
export const Navigation = () => {
  const { isLogIn } = useAuth();
  return (
    <>
      <div className={styles.nav}>
        <nav className={styles.nav__box}>
          <NavLink to="/">Home</NavLink>
          {isLogIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>
      </div>
    </>
  );
};
