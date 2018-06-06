import {LOGGINGIN, LOGGEDIN, ERROR, SIGNINGUP} from '../Actions/LogIn';

const initialState = {
  loggedIn: false,
  loggingIn: false,
  signingUp: false,
  user: null,
  error: null,
}


const LogInReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGGINGIN:
      return {...state, loggingIn: true}
    case LOGGEDIN:
      return {...state, loggedIn: true, loggingIn: false, signingUp: false, user: action.payload}
    case SIGNINGUP:
      return {...state, signingUp: true}
    case ERROR:
      return {...state, loggingIn: false, error: action.payload}
    default:
      return state;
  }
}

export default LogInReducer;