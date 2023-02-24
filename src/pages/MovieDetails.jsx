import { AdditionalInfo } from 'components/AdditionalInfo';
import Cast from 'components/Cast';
import { getMoviesById } from 'components/getMoviesById';
import Reviews from 'components/Reviews';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(backLinkHref);
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
        <Link to={backLinkHref}>Back to products</Link>
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
          <div>
            <h4 className={css.overwiev}>Overwiev</h4>
            <p>{movies.overview}</p>
          </div>
          <div>
            <h4 className={css.genres}>genres:</h4>
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
