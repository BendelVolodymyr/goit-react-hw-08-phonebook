import { useSelector } from 'react-redux';
import {
  selectErrorFulfilled,
  selectIsLogIn,
  selectIsRefreshing,
  selectToken,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);
  const isLogIn = useSelector(selectIsLogIn);
  const user = useSelector(selectUser);
  const errorFulfilled = useSelector(selectErrorFulfilled);

  return { isRefreshing, token, isLogIn, user, errorFulfilled };
};
