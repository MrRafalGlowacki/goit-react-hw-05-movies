import React, { useState, useEffect } from 'react';
import { getTrandingMovies } from 'components/getTrandingMovies';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetcheTrandingMovies = async () => {
      const trandingMovies = await getTrandingMovies();
      setMovies(trandingMovies);
    };
    fetcheTrandingMovies();
  }, []);

  const list = movies.map((movie, index) => (
    <li key={movie.id + '-' + index}>
      {' '}
      <Link to={`movie/${movie.id}`} state={{ from: location }}>
        {' '}
        {movie.title || movie.name}
      </Link>
    </li>
  ));
  return (
    <>
      <h1>Trending this week</h1>
      <ul>{list}</ul>
    </>
  );
};
export default Home;
