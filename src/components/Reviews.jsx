import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';

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
      <ul>
        {movieReviews.length !== 0 ? (
          movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h5>{author}</h5>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <li>No reviews yet</li>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
