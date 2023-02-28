import { Loader } from 'components/Loader/Loader';
import { searchMovies } from 'components/searchMovies';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSerchParams] = useSearchParams({
    search: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const searchValue = searchParams.get('search');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleOnSubmit = async event => {
    event.preventDefault();
    setSerchParams({ search: search });
    setSearch('');
  };
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const fetchedMovies = await searchMovies(searchValue);
      setMovies(fetchedMovies);
      setIsLoading(false);
    };
    fetchMovies();
  }, [searchValue]);

  const list = movies.map((movie, index) => (
    <li key={movie.id + '-' + index}>
      {' '}
      <Link to={`${movie.id}`} state={{ from: location }}>
        {' '}
        {movie.title}
      </Link>
    </li>
  ));
  return (
    <>
      <form className={css.form} onSubmit={handleOnSubmit}>
        <input
          className={css.input}
          type="text"
          value={search}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="search..."
        ></input>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <ul className={css.list}>{(isLoading && <Loader />) || list}</ul>
    </>
  );
};
export default Movies;
