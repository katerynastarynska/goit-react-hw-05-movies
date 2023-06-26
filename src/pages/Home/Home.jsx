import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../../services/api';
import { Link } from 'react-router-dom';

import css from './Home.module.css';
import imgDefault from '../../assets/default-image154w.png';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrandingMovies();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        Notiflix.Notify.failure('Service not available');
      }
    };
    fetchMovies();
  }, []);

  const base_url = 'http://image.tmdb.org/t/p/';
  const image_size = 'w154/';

  return (
    <div>
      <h2 className={css.mainTitle}>Trending now</h2>
      <ul className={css.trendingMoviesList}>
        {movies.map(({ id, poster_path, name, title }) => {
          return (
            <Link
              className={css.trendingMoviesItem}
              key={id}
              to={`movies/${id}`}
            >
              <img
                src={
                  poster_path
                    ? `${base_url}${image_size}${poster_path}`
                    : imgDefault
                }
                alt={title}
              />
              <div className={css.trendingMoviesNameContainer}>
                <p className={css.trendingMoviesName}>{title || name}</p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
