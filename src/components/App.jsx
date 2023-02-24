import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
