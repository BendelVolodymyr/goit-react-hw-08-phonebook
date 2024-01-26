import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
export const Navigation = () => {
  const { isLogIn } = useAuth();
  return (
    <>
      <div className={styles.nav}>
        <nav>
          <ul className={styles.nav__box}>
            <li className={styles.nav__box_link}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.nav__box_link}>
              {isLogIn && <NavLink to="/contacts">Contacts</NavLink>}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
