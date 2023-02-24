import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          {' '}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : '')}
            >
              Home
            </NavLink>{' '}
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? css.active : '')}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
