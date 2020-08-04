import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session';

const errorMessages = {
  ["Username can't be blank"]: 'username',
  ["Email can't be blank"]: 'email',
  ["Password is too short (minimum is 6 characters)"]: 'password'
};

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  let newState = {};

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors.responseText === '["Invalid Credentials"]') {
        newState['email'] = 'Please enter a valid email.';
        newState['password'] = 'Your password must contain at least 6 characters.';
      } else {
        action.errors.responseJSON.forEach(error => {
          let key = errorMessages[error];
          newState[key] = error;
        });
      }

      return newState;
    
    case CLEAR_SESSION_ERRORS:
      return [];

    case RECEIVE_CURRENT_USER:
      return [];
  
    default:
      return oldState;
  }
}

export default sessionErrorsReducer;