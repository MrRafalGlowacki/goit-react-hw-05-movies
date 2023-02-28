import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  const location = useLocation();
  return (
    <div className={css.container}>
      <h2>Additional Information</h2>
      <ul className={css.link}>
        <li>
          <NavLink to="cast" state={location.state}>
            cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={location.state}>
            reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
