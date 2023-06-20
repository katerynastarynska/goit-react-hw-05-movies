import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../services/api';


const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await getTrandingMovies();
    console.log(data.results);
    setMovies(data.results);
  };
  console.log(movies);

  useEffect(() => {
    console.log('useeffect');
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending now</h2>
      <ul>
        {movies.map(movie => {
          console.log(movie);
          return (
            <li key={movie.id}>
              <p>{movie.title || movie.name}</p>
            </li>
          );
        })}
      </ul>
    </div>

   );
};

export default Home;
