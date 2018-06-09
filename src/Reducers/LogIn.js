import {
  LOGGINGIN,
  LOGGEDIN,
  ERROR,
  SIGNINGUP,
  SIGNEDOUT,
  SIGNINGOUT
} from "../Actions/LogIn";

import storage from 'redux-persist/lib/storage'

const initialState = {
  loggedIn: false,
  loggingIn: false,
  signingUp: false,
  user: null,
  error: null,
  signingOut: false,
  signedOut: false
};

const LogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGINGIN:
      return { ...state, loggingIn: true };
    case LOGGEDIN:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        signingUp: false,
        user: action.payload
      };
    case SIGNINGUP:
      return { ...state, signingUp: true };
    case SIGNINGOUT:
      return {...state, signingOut: true};
    case SIGNEDOUT:
        Object.keys(state).forEach(key => {
            storage.removeItem(`persist:${key}`);
        });
        state = undefined;
    case ERROR:
      return { ...state, loggingIn: false, error: action.payload };
    default:
      return state;
  }
};

export default LogInReducer;
