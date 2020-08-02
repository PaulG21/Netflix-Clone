import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SessionForm from './session_form';

const mstp = state => ({
  form: {
    username: '',
    email: '',
    password: ''
  },
  formType: 'Sign Up'
});

const mdtp = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect (mstp, mdtp)(SessionForm);