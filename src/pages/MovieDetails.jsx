import { AdditionalInfo } from 'components/AdditionalInfo';
import { getMoviesById } from 'components/getMoviesById';
import React, { lazy, useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const handleGenreList = () => {
    const genresArray = movies.genres;
    const genres = genresArray?.map(genre => ' ' + genre.name);
    return genres;
  };
  const handleScore = () => {
    const score = movies.vote_average;
    const percentageScore = Number(score * 10);
    return percentageScore?.toFixed(1);
  };
  const handleYear = () => {
    const date = movies.release_date;
    const year = date?.substring(0, 4);
    return year;
  };

  useEffect(() => {
    const fetchById = async s => {
      const moviesById = await getMoviesById(s);
      setMovies(moviesById);
    };
    fetchById(id);
  }, [id]);

  return (
    <>
      <div className={css.container}>
        <Link className={css.link} to={backLinkHref}>
          Back
        </Link>
        <img
          className={css.poster}
          src={
            movies.poster_path
              ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
          }
          alt={movies.title}
        />
        <h1 className={css.title}>
          {movies.title} ({handleYear()})
        </h1>
        <div className={css.info}>
          <div className={css.score}>
            <h4>User Score:</h4>
            <p>{handleScore() + '%'}</p>
          </div>
          <div className={css.overwiev}>
            <h4>Overwiev</h4>
            <p>{movies.overview}</p>
          </div>
          <div className={css.genres}>
            <h4>genres:</h4>
            <p>{handleGenreList()}</p>
          </div>
        </div>
      </div>
      <AdditionalInfo />
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
export default MovieDetails;
