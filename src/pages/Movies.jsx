import Notiflix from 'notiflix';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMovieSearch = e => {
    const value = e.target.value;
    setSearchParams({ searchQuery: value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setMovies([]);
      Notiflix.Notify.failure('Please enter movie name');
      return;
    }
    setIsSubmitting(true);
    setSearchParams({ searchQuery: '' });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    console.log(searchQuery);
    const fetchMoviesByName = async searchQuery => {
      try {
        const data = await getMovieByName(searchQuery);
        console.log(data);
        if (!data?.results?.length) {
          setMovies([]);
          Notiflix.Notify.failure('Results not found');
          return;
        }
        setMovies(data.results);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsSubmitting(false);
      }
    };

    if (isSubmitting) {
      fetchMoviesByName(searchQuery);
    }
  }, [isSubmitting, searchParams, searchQuery, error]);

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            value={searchQuery}
            placeholder="Search movies"
            onChange={handleMovieSearch}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <div>
        <ul>
          {movies.map(movie => {
            // console.log(movie);
            return (
              <li key={movie.id}>
                <p>{movie.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Movies;
