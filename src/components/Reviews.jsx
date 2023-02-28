import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from './getReviews';
import { Loader } from './Loader/Loader';
const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchById = async s => {
      setIsLoading(true);
      const moviesById = await getReviews(s);
      setReviews(moviesById);
      setIsLoading(false);
    };
    fetchById(id);
  }, [id]);

  const movieReviews = reviews?.map((review, index) => (
    <div key={review.id + '-' + index}>
      <div>
        <h4>{review.author}</h4>
        <p>{review.content}</p>
      </div>
    </div>
  ));
  return (isLoading && <Loader />) || <div>{movieReviews}</div>;
};

export default Reviews;
