import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={css.headerText} to="/">
            Home
          </NavLink>
          <NavLink className={css.headerText} to="/movies">
            Movies
          </NavLink>
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
