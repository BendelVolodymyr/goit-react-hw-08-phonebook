import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.box__list}>
        <li className={styles.list_link}>
          <NavLink id="register" to="/register">
            Create an account
          </NavLink>
        </li>
        <li className={styles.list_link}>
          <NavLink id="login" to="/login">
            Sign in
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
