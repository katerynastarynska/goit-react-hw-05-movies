import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/api';
import imgDefault from '../../assets/default-image.png';
import css from './Cast.module.css';

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
      <ul className={css.castList}>
        {movieCast.length !== 0 ? (
          movieCast.map(({ id, profile_path, name, character }) => (
            <li className={css.castListItem} key={id}>
              <img
                className={css.castImage}
                src={
                  profile_path
                    ? `${base_url}${image_size}${profile_path}`
                    : imgDefault
                }
                alt={name}
              />
              <h5 className={css.castListActorName}>{name}</h5>
              <div className={css.castListCharacter}>
                <h6 className={css.castListCharacterTitle}>
                  Character:
                  <p className={css.castListCharacterName}>{character}</p>
                </h6>
              </div>
            </li>
          ))
        ) : (
          <li className={css.castListNoInfo}>No information</li>
        )}
      </ul>
    </div>
  );
};

export default Cast;
