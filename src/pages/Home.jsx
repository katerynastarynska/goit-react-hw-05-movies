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

  // fetchMovies()
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
              {/* <Link to={`${movie}`}>{movie}</Link> */}
            </li>
          );
        })}
      </ul>
    </div>

    //     useEffect(() => {
    // http щапрос с моунтингом
    //     }, [])
  );
};

export default Home;
