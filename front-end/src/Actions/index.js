import axios from 'axios';

export const GETREQUEST = 'GETREQUEST';
export const ERROR = 'ERROR';

const url = "";

export const getReqest = () => {
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: GETREQUEST, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
