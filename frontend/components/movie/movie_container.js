import { connect } from 'react-redux';
import MovieForm from './movie_form';
import { logout } from '../../actions/session';
import { fetchMovies } from '../../actions/movie_actions';

const mstp = state => ({
  movies: Object.values(state.entities.movies)
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mstp, mdtp)(MovieForm);