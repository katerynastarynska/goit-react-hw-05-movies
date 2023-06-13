import { Link } from 'react-router-dom';

const Movies = () => {
    // state
  // useEffect(() => {
  // http щапрос 
  //     }, [])
//   записываем в стейт

  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4'].map(movie => (
        <Link key={movie} to={`${movie}`}>{movie}</Link>
      ))}
    </div>
  );
};

export default Movies;
