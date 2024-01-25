import { useSelector } from 'react-redux';
import {
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

  return { isRefreshing, token, isLogIn, user };
};
