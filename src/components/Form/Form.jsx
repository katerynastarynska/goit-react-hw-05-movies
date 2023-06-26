import { useState } from 'react';
import Notiflix from 'notiflix';

import css from './Form.module.css';

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
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          autoComplete="off"
          autoFocus
          value={movieName}
          placeholder="Movie name"
          onChange={handleMovieSearch}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
