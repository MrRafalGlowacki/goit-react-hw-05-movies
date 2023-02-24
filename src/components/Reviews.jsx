import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getReviews } from './getReviews';

export default function Reviews() {
  const location = useLocation();
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchById = async s => {
      const moviesById = await getReviews(s);
      setReviews(moviesById);
    };
    fetchById(id);
  }, [id]);
  console.log(location);
  const movieReviews = reviews?.map((review, index) => (
    <div key={review.id + '-' + index}>
      <div>
        <h4>{review.author}</h4>
        <p>{review.content}</p>
      </div>
    </div>
  ));
  return <div>{movieReviews}</div>;
}
