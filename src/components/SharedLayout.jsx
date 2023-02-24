import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          {' '}
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
