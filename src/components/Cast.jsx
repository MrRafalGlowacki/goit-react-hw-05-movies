import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from './getCast';
import css from './Cast.module.css';
import { Loader } from './Loader/Loader';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchById = async s => {
      setIsLoading(true);
      const moviesById = await getCast(s);
      setCast(moviesById);
      setIsLoading(false);
    };
    fetchById(id);
  }, [id]);

  const credits = cast?.map((actor, index) => (
    <div key={actor.credit_id + '-' + index}>
      <img
        className={css.actor}
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
        }
        alt={actor.name}
      />
      <div>
        <h4>{actor.name}</h4>
      </div>
      <div>
        <h4>Character:</h4>
        <p>{actor.character}</p>
      </div>
    </div>
  ));
  return (
    (isLoading && <Loader />) || <div className={css.container}>{credits}</div>
  );
};

export default Cast;
