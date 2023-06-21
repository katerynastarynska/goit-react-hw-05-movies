import Notiflix from 'notiflix';

const BASE_URL = "https://api.themoviedb.org/3";
const KEY = '7dc61a6c44fade8b575440491a92ae90';

// https://api.themoviedb.org/3/trending/all/day?api_key=7dc61a6c44fade8b575440491a92ae90
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=7dc61a6c44fade8b575440491a92ae90
// https://api.themoviedb.org/3/search/movie?api_key=7dc61a6c44fade8b575440491a92ae90

// details: https://api.themoviedb.org/3/movie/{movie_id}?api_key=7dc61a6c44fade8b575440491a92ae90
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=7dc61a6c44fade8b575440491a92ae90

export const getTrandingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`);
    if (!response.ok) {
        Notiflix.Notify.failure('Service not available');

        return Promise.reject(new Error("Bad request"));
    }
    return response.json();
};

export const getMovieByName = async (searchQuery) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${KEY}`);
    if (!response.ok) {
        Notiflix.Notify.failure('Service not available');
        return Promise.reject(new Error("Bad request"));
    }
    return response.json();

};

export const getMovieById = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
    if (!response.ok) {
        Notiflix.Notify.failure('Service not available');

        return Promise.reject(new Error("Bad request"));
    }
    return response.json();
};

