import * as MovieUtil from '../util/movie_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const fetchMovies = () => dispatch => (
  MovieUtil.fetchMovies()
    .then(movies => dispatch(receiveMovies(movies))) 
  );

export const fetchMovie = (movieId) => dispatch => (
  MovieUtil.fetchMovie(movieId)
    .then(movie => dispatch(receiveMovie(movie)))
);