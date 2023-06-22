import { useState } from 'react';
import Notiflix from 'notiflix';

const Form = ({ setSearchParams }) => {
  const [movieName, setMovieName] = useState('');

  const handleMovieSearch = e => {
    const value = e.target.value;
    setMovieName(value);

    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ searchQuery: value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      Notiflix.Notify.failure('Please enter movie name');
      return;
    }
    setSearchParams({ movieName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        value={movieName}
        placeholder="Search movies"
        onChange={handleMovieSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
