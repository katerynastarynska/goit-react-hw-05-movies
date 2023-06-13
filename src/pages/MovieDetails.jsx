import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  // state
  // useEffect(() => {
  // http щапрос
  //     }, [])
  //   isLoading
  //   записываем в стейт

  return (
    <>
      <h3>MovieDetails: {movieId}</h3>
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
