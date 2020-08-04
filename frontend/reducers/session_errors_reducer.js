import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session';

const errorMessages = {
  ["Email can't be blank"]: 'email',
  ["Username can't be blank"]: 'username',
  ["Password is too short (minimum is 6 characters"]: 'password'
};

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  let newState = {};

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors.responseText === '["Invalid Credentials"]') {
        newState['email'] = 'Invalid email or password';
        newState['password'] = 'Invalid email or password';
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