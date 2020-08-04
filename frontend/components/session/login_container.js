import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session'

const mstp = state => ({
  form: {
    email: '',
    password: ''
  },
  formType: 'Sign In',
  errors: state.errors.session
});

const mdtp = dispatch => ({
  processForm: user => dispatch(login(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(SessionForm)