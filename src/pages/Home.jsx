import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../services/api';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <h2>Trending now</h2>
      <ul>
        {movies.map(movie => {
          // console.log(movie);
          return (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              <p>{movie.title || movie.name}</p>{' '}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
