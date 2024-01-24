import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';

const HomeInAuthPage = lazy(() => import('../pages/HomeInAuth'));
const HomeNotAuthPage = lazy(() => import('../pages/HomeNotAuth'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const { isLogIn, isRefreshing } = useAuth();

  return isRefreshing ? (
    <b>Зачекайте оновлення... Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={isLogIn ? <HomeInAuthPage /> : <HomeNotAuthPage />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
