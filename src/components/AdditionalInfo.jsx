import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  return (
    <div className={css.container}>
      <h2>Additional Information</h2>
      <ul className={css.link}>
        <li>
          <NavLink to="cast">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};
