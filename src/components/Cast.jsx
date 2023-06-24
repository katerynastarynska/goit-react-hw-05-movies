import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/api';
import imgDefault from '../assets/default-image.png';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async movieId => {
      try {
        const data = await getMovieCast(movieId);
        setMovieCast(data.cast);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovieCast(movieId);
  }, [movieId, error]);

  const base_url = 'http://image.tmdb.org/t/p/';
  const image_size = 'w92/';

  return (
    <div>
      <ul>
        {movieCast.length !== 0 ? (
          movieCast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `${base_url}${image_size}${profile_path}`
                    : imgDefault
                }
                alt=""
              />
              <h5>{name}</h5>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <li>No information</li>
        )}
      </ul>
    </div>
  );
};

export default Cast;
