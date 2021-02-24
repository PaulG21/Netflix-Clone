import * as MyListUtil from '../util/mylist_util';

export const RECEIVE_ALL_MY_LIST = "RECEIVE_ALL_MY_LIST";
export const ADDTOMYLIST = "ADDTOMYLIST";
export const REMOVEFROMMYLIST = "REMOVEFROMMYLIST";


const receiveMyLists = movies => {
    return {
        type: RECEIVE_ALL_MY_LIST,
        movies
    }
}

const addToList = movieId => {
    return {
        type: ADDTOMYLIST,
        movieId
    }
}

const removeFromList = movieId => {
    return {
        type: REMOVEFROMMYLIST,
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