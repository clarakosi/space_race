import {LOGGINGIN, LOGGEDIN, ERROR} from '../Actions/LogIn';

const initialState = {
  loggedIn: false,
  loggingIn: false,
  error: null,
}


const LogInReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGGINGIN:
      return {...state, loggingIn: true}
    case LOGGEDIN:
      return {...state, loggedIn: true, loggingIn: false}
    case ERROR:
      return {...state, loggingIn: false, error: action.payload}
    default:
      return state;
  }
}

export default LogInReducer;