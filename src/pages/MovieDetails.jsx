import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    console.log(movieId);

    const fetchMoviesById = async movieId => {
      try {
        const data = await getMovieById(movieId);
        console.log(data);
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
  console.log(movie);

  const { title, poster_path, genres, overview, homepage } = movie;
  return (
    <>
      <h2>{title}</h2>
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
      <Outlet />
    </>
  );
};

export default MovieDetails;
