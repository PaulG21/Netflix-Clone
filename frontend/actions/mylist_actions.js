import * as MyListUtil from '../util/mylist_util';

export const FETCH_MYLISTS = "FETCH_MYLISTS";
export const ADDTOMYLIST = "ADDTOMYLIST";
export const REMOVEFROMMYLIST = "REMOVEFROMMYLIST";


const fetchMyLists = movies => {
    return {
        type: FETCH_MYLISTS,
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

export const fetchLists = movies => dispatch => (
    MyListUtil.getMyLists(movies)
        .then((movies) => dispatch(fetchMyLists(movies)))
)

export const addToMyList = (movieId) => dispatch => {
    debugger
    return MyListUtil.addToMyList(movieId)
        .then((movie) => dispatch(addToList(movie)))
}

export const removeFromMyList = id => dispatch => (
   MyListUtil.removeFromMyList(id)
    .then(movieId => dispatch(removeFromList(movieId)))
)