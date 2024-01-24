import { useSelector } from 'react-redux';
import {
  selectIsLogIn,
  selectIsRefreshing,
  selectToken,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);
  const isLogIn = useSelector(selectIsLogIn);

  return { isRefreshing, token, isLogIn };
};
