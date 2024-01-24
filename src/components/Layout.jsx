import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNav } from './AppNav/AppNav';

export const Layout = () => {
  return (
    <>
      <AppNav />
      <section>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};
