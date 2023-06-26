import Notiflix from 'notiflix';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieById } from 'services/api';
import Loader from 'components/Loader/Loader';
import imgDefault from '../../assets/default-movie.png';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);

  const location = useLocation();
  const movieLocationRef = useRef(location.state?.from ?? '/');

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
  const backdrop_size = 'w342/';

  const { title, poster_path, genres, overview, homepage } = movie;
  return (
    <>
      <h2 className={css.movieTitle}>{title}</h2>
      <div className={css.movieInfo}>
        <img
          src={
            poster_path
              ? `${base_url}${backdrop_size}${poster_path}`
              : imgDefault
          }
          alt={title}
        />

        <div className={css.movieDetails}>
          <div className={css.movieGenres}>
            <h3 className={css.genresTitle}>Genres:</h3>
            <ul className={css.genreList}>
              {genres &&
                genres.map(genre => (
                  <li className={css.genreListItem} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className={css.movieOverview}>
            <h3 className={css.genresTitle}>Overview:</h3>
            <p className={css.movieOverviewInfo}>{overview}</p>
            <a href={homepage} className={css.homepageLink}>
              {homepage}
            </a>
          </div>
        </div>
      </div>

      <br />

      <Link to={movieLocationRef.current} className={css.backToMoviesBtn}>
        Back to movies
      </Link>
      <ul className={css.additionalInfoList}>
        <li>
          <Link className={css.additionalInfoText} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.additionalInfoText} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
