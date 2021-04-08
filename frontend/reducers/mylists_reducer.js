import * as myListActions from '../actions/mylist_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case myListActions.RECEIVE_ALL_MYLIST:
            return Object.assign({}, state, action.movies)
        case myListActions.ADD_TO_MY_LIST:
            return Object.assign({}, state, { [action.movieId.id]: action.movieId });
        case myListActions.REMOVE_FROM_MY_LIST:
            let newstate = merge({}, state);
            delete newstate[action.movieId.id];
            return newstate;
        default:
            return state;
    }
};