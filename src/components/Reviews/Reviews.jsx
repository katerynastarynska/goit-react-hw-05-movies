import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReviews = async movieId => {
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data.results);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieReviews(movieId);
  }, [error, movieId]);

  return (
    <div>
      <ul className={css.reviewsList}>
        {movieReviews.length !== 0 ? (
          movieReviews.map(({ id, author, content }) => (
            <li className={css.reviewsListItem} key={id}>
              <h4 className={css.reviewAuthorName}>{author}</h4>
              <p className={css.reviewAuthorContent}>{content}</p>
            </li>
          ))
        ) : (
          <li className={css.reviewAuthorName}>No reviews yet</li>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
