import React, { useState, useEffect } from 'react';
import { getTrandingMovies } from 'components/getTrandingMovies';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    const fetcheTrandingMovies = async () => {
      const trandingMovies = await getTrandingMovies();
      setMovies(trandingMovies);
      setIsLoading(false);
    };
    fetcheTrandingMovies();
  }, []);

  const list = movies.map((movie, index) => (
    <li key={movie.id + '-' + index}>
      {' '}
      <Link to={`movies/${movie.id}`} state={{ from: location }}>
        {' '}
        {movie.title}
      </Link>
    </li>
  ));
  return (
    (isLoading && <Loader />) || (
      <>
        <div className={css.container}>
          <h1 className={css.title}>Trending this week</h1>
          <ul className={css.list}>{list}</ul>
        </div>
      </>
    )
  );
};
export default Home;
