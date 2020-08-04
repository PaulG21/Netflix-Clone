import { connect } from 'react-redux';
import MovieForm from './movie_form';
import { logout } from '../../actions/session'

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mdtp)(MovieForm);