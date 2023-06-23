import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCastMovie } from 'services/api';
import imgDefault from '../assets/default-image.png';
// 
const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchCastMovie = async movieId => {
      try {
        const data = await getCastMovie(movieId);
  
        if (!data) {
          setMovieCast([]);
          Notiflix.Notify.failure('No information');
          return;
        }
        setMovieCast(data.cast);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };
    fetchCastMovie(movieId);
  }, [movieId, error]);

  const base_url = 'http://image.tmdb.org/t/p/';
  const image_size = 'w92/';

  return (
    <div>
      <ul>
        {movieCast &&
          movieCast.map(item => (
            <li key={item.id}>
              <img
                src={item.profile_path
                    ? `${base_url}${image_size}${item.profile_path}`
                    : imgDefault
                }
                alt=""
              />
              <h5>{item.name}</h5>
              <p>Character: {item.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
