import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import movieReducer from './movies_reducer';
import myListReducer from './mylists_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  movies: movieReducer,
  mylist: myListReducer,
});

export default entitiesReducer;