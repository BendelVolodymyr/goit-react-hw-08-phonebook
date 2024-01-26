import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.box__list}>
        <li className={styles.list_link}> 
          <NavLink className={styles.link} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
