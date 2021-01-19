import MylistForm from './mylist_form';
import { connect } from 'react-redux';
import * as mylistActions from '../../actions/mylist_actions';
import { renderMovies } from '../../actions/movie_actions';

const mapStateToProps = (state) => {
    let userId = state.sessions.currentUser.id;
    return ({
        currentUser: userId,
        mylists: Object.values(state.entities.mylists),
        movies: Object.values(state.entities.movies)
    })
}


const mapDispatchToProps = dispatch => {
    return ({
        fetchLists: () => dispatch(mylistActions.fetchLists()),
        deleteMyList: (moviesId) => dispatch(mylistActions.deleteMyList(moviesId)),
        renderMovies: () => dispatch(renderMovies())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MylistForm);
