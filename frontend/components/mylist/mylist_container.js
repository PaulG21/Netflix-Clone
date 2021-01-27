import MylistForm from './mylist_form';
import { connect } from 'react-redux';
import * as mylistActions from '../../actions/mylist_actions';
import { fetchMovies } from '../../actions/movie_actions';
import { logout } from '../../actions/session';

const mstp = state => {
    return ({
        currentUser: state.session.currentUser.id,
        mylists: Object.values(state.entities.mylists),
        movies: Object.values(state.entities.movies)
    })
}


const mdtp = dispatch => {
    return ({
        fetchLists: () => dispatch(mylistActions.fetchLists()),
        removeFromMyList: (moviesId) => dispatch(mylistActions.removeFromMyList(moviesId)),
        fetchMovies: () => dispatch(fetchMovies()),
        logout: () => dispatch(logout()),
    })
}

export default connect(mstp, mdtp)(MylistForm);
