import { useDispatch } from 'react-redux';
import { LogOut } from '../../redux/auth/operations';

export const UserNav = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p></p>
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
