import { GETREQUEST, ERROR } from '../Actions';

const initialState = {
  data: [],
  get_request: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETREQUEST:
      return { ...state, get_request: true, data: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
