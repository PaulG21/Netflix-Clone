import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session';
import SessionForm from './session_form';

const mstp = state => ({
  form: {
    username: '',
    email: '',
    password: ''
  },
  formType: 'Sign Up',
  errors: state.errors.session
});

const mdtp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect (mstp, mdtp)(SessionForm);