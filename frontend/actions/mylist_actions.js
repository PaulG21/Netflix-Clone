import * as myListActions from '../util/mylist_util';

export const FETCH_MYLISTS = "FETCH_MYLISTS";
export const CREATEMYLIST = "CREATEMYLIST";
export const DELETEMYLIST = "DELETEMYLIST";


const fetchMyLists = movies => {
    return {
        type: FETCH_MYLISTS,
        movies
    }
}

const createList = movieId => {
    return{
        type: CREATEMYLIST,
        movieId
    }
}

const deleteList = movieId => {
    return{
        type: DELETEMYLIST,
        movieId
    }
}

export const fetchLists = movies => dispatch => {
    return myListActions.getMyLists(movies).then((movies) => dispatch(fetchMyLists(movies)))
}

export const createMyList = (moviesId) => dispatch => {
    return myListActions.createList(moviesId).then((movie) => dispatch(createList(movie)))
}

export const deleteMyList = id => dispatch => {
    return myListActions.deleteMyList(id).then(movieId => dispatch(deleteList(movieId)))
}