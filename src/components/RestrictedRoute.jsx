import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogIn } = useAuth();
  return isLogIn ? <Navigate to={redirectTo} /> : Component;
};
