import { searchMovies } from 'components/searchMovies';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSerchParams] = useSearchParams({
    search: '',
  });
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
      const fetchedMovies = await searchMovies(searchValue);
      setMovies(fetchedMovies);
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
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={search}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="search..."
        ></input>
        <button type="submit">Search</button>
      </form>
      {list}
    </>
  );
};
export default Movies;
