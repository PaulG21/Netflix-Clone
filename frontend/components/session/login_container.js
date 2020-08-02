import { connect } from 'react-redux';
import SessionForm from './session_form';

const mstp = state => ({
  form: {
    email: '',
    password: ''
  },
  formType: 'Sign In'
});

const mdtp = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mstp, mdtp)(SessionForm)