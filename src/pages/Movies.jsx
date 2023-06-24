import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import Form from 'components/Form';
import { getMovieByName } from 'services/api';

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

  return (
    <>
      <header>
        <Form setSearchParams={setSearchParams} />
      </header>

      <div>
        <ul>
          {movies.map(({id, title, name}) => {
            return (
              <Link
                key={id}
                to={`${id}`}
                state={{ from: location }}
              >
                <p>{title || name}</p>{' '}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Movies;
