import { RECEIVE_ALL_MOVIES,  RECEIVE_MOVIE } from '../actions/movie_actions';

const movieReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return Object.assign({}, state, action.movies)
    case RECEIVE_MOVIE:
      return Object.assign({}, state, {[action.movie.id]: action.movie});
    default:
      return state;
  }
};

export default movieReducer;