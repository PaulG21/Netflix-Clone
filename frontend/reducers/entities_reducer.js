import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import movieReducer from './movies_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  movies: movieReducer,
});

export default entitiesReducer;