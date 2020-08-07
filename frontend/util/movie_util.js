export const fetchMovies = () => (
  $.ajax ({
    url: '/api/movies',
  })
);

export const fetchMovie = (movieId) => (
  $.ajax({
    url: `/api/movies/${movieId}`,
  })
);


