import React from 'react';
import { NavLink } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <NavLink to="cast">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
      </ul>
    </>
  );
};
