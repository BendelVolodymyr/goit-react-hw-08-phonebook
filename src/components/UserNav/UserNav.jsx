import { useDispatch } from 'react-redux';
import { LogOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const UserNav = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <div>
        <button
          onClick={() => {
            dispatch(LogOut());
          }}
          type="button"
        >
          LogOut
        </button>
      </div>
    </>
  );
};
