import * as myListActions from '../actions/mylist_actions';
import { merge } from 'lodash';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type){
        case myListActions.FETCH_MYLISTS:
            return Object.assign({}, state, action.movies)
        case myListActions.ADDTOMYLIST:
            return Object.assign({}, oldstate, { [action.moviesId.id]: action.moviesId});
        case myListActions.REMOVEFROMMYLIST:
            let newstate = merge({}, oldstate);
            delete newstate[action.moviesId];
            return newstate;
        default:
            return oldstate;
    }
};