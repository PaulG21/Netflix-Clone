import { connect } from 'react-redux';
import { login, signup } from '../../actions/session'
import Splash from './splash_form';

const mdtp = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect (null, mdtp)(Splash)