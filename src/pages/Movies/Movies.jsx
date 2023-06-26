import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import Form from 'components/Form/Form';
import { getMovieByName } from 'services/api';
import css from './Movies.module.css';
import imgDefault from '../../assets/default-image154w.png';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchQuery = searchParams.get('movieName') ?? '';
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchMoviesByName = async searchQuery => {
      try {
        const data = await getMovieByName(searchQuery);
        if (!data?.results?.length) {
          setMovies([]);
          Notiflix.Notify.failure('Results not found');
          return;
        }
        setMovies(data.results);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    fetchMoviesByName(searchQuery);
  }, [searchParams, error, searchQuery]);

  const base_url = 'http://image.tmdb.org/t/p/';
  const image_size = 'w154/';

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      <div>
        <ul className={css.searchedMoviesList}>
          {movies.map(({ id, title, name, poster_path }) => {
            return (
              <Link
                className={css.searchedMoviesItem}
                key={id}
                to={`${id}`}
                state={{ from: location }}
              >
                <img
                  src={
                    poster_path
                      ? `${base_url}${image_size}${poster_path}`
                      : imgDefault
                  }
                  alt={title}
                />
                <div className={css.searchedMoviesNameContainer}>
                  <p className={css.searchedMoviesName}>{title || name}</p>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Movies;
