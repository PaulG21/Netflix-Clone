import * as myListActions from '../actions/mylist_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case myListActions.RECEIVE_ALL_MY_LIST:
            return Object.assign({}, state, action.movies)
        case myListActions.ADDTOMYLIST:
            return Object.assign({}, state, { [action.moviesId.id]: action.moviesId});
        case myListActions.REMOVEFROMMYLIST:
            let newstate = merge({}, state);
            delete newstate[action.moviesId];
            return newstate;
        default:
            return state;
    }
};