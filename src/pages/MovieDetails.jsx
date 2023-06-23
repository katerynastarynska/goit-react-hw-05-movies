import Notiflix from 'notiflix';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);

  const location = useLocation();
  const movieLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    const fetchMoviesById = async movieId => {
      try {
        const data = await getMovieById(movieId);
        if (!data) {
          setMovie('');
          Notiflix.Notify.failure('Results not found');
          return;
        }
        setMovie(data);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    fetchMoviesById(movieId);
  }, [movieId, error]);

  const base_url = 'http://image.tmdb.org/t/p/';
  const backdrop_size = 'w300/';

  const { title, poster_path, genres, overview, homepage } = movie;
  return (
    <>
      <h2>{title}</h2>
      <Link to={movieLocationRef.current}>Back to movies</Link>
      {poster_path && (
        <img src={`${base_url}${backdrop_size}${poster_path}`} alt="" />
      )}

      <h3>Genres:</h3>
      {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}

      <h3>Overview:</h3>
      <p>{overview}</p>
      <a href={homepage}>{homepage}</a>

      <h3>Additional information:</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
