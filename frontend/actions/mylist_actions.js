import * as MyListUtil from '../util/mylist_util';

export const RECEIVE_ALL_MYLIST = "RECEIVE_ALL_MYLIST";
export const ADD_TO_MY_LIST = "ADD_TO_MYLIST";
export const REMOVE_FROM_MY_LIST = "REMOVE_FROM_MYLIST";


const receiveMyLists = movies => {
    return {
        type: RECEIVE_ALL_MYLIST,
        movies
    }
}

const addToList = movieId => {
    return {
        type: ADD_TO_MY_LIST,
        movieId
    }
}

const removeFromList = movieId => {
    return {
        type: REMOVE_FROM_MY_LIST,
        movieId
    }
}

export const fetchMyLists = () => dispatch => (
    MyListUtil.fetchMyLists()
        .then((movies) => dispatch(receiveMyLists(movies)))
)

export const addToMyList = (movieId) => dispatch => (
    MyListUtil.addToMyList(movieId)
        .then((movie) => dispatch(addToList(movie)))
)

export const removeFromMyList = id => dispatch => (
   MyListUtil.removeFromMyList(id)
    .then(movieId => dispatch(removeFromList(movieId)))
)