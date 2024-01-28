import { useDispatch } from 'react-redux';
import { LogOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import styles from './UserNav.module.css';
import { VscAccount } from 'react-icons/vsc';
export const UserNav = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <div className={styles.global_box__out}>
        <p className={styles.global_box__out_text}>
          {user.email}
          {<VscAccount />}
        </p>
        <div className={styles.box__out}>
          <p>{user.name}</p>
          <button
            onClick={() => {
              dispatch(LogOut());
            }}
            type="button"
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};
