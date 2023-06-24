import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
