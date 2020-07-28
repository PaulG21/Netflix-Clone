import { combineReducer } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';

export default combineReducer ({
  entities: entitiesReducer,
  session: sessionReducer,
});