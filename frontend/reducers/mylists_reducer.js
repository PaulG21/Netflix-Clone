import * as myListActions from '../actions/mylist_actions';
import { merge } from 'lodash';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type){
        case myListActions.FETCH_MYLISTS:
            return action.movies;
        case myListActions.CREATEMYLIST:
            return Object.assign({}, oldstate, { [action.moviesId.id]: action.moviesId});
        case myListActions.DELETEMYLIST:
            let newstate = merge({}, oldstate);
            delete newstate[action.moviesId];
            return newstate;
        default:
            return oldstate;
    }
};