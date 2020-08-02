import { connect } from 'react-redux';
import MovieForm from './movie_form';

const mdtp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mdtp)(MovieForm);