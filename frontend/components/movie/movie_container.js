import { connect } from 'react-redux';
import MovieForm from './movie_form';
import { logout } from '../../actions/session';
import { fetchMovies } from '../../actions/movie_actions';
import { addToMyList, removeFromMyList } from '../../actions/mylist_actions';

const mstp = state => ({
  movies: Object.values(state.entities.movies),
  mylist: state.entities.mylist,
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  addToMyList: (movieId) => dispatch(addToMyList(movieId)), 
  removeFromMyList: (movieId) => dispatch(removeFromMyList(movieId)),
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mstp, mdtp)(MovieForm);