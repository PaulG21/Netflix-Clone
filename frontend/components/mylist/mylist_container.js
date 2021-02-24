import MylistForm from './mylist_form';
import { connect } from 'react-redux';
import * as mylistActions from '../../actions/mylist_actions';
import { fetchMovies } from '../../actions/movie_actions';
import { logout } from '../../actions/session';

const mstp = state => ({
        currentUser: state.entities.users[state.session.currentUser.id],
        mylist: Object.values(state.entities.mylist),
        movies: Object.values(state.entities.movies)
});


const mdtp = dispatch => ({
        fetchLists: () => dispatch(mylistActions.fetchMyLists()),
        removeFromMyList: (moviesId) => dispatch(mylistActions.removeFromMyList(moviesId)),
        fetchMovies: () => dispatch(fetchMovies()),
        logout: () => dispatch(logout()),
});

export default connect(mstp, mdtp)(MylistForm);
