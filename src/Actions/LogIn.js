import axios from 'axios';

export const LOGGINGIN = 'LOGGINGIN';
export const LOGGEDIN = 'LOGGEDIN';
export const ERROR = 'ERROR';


// TODO: change url for deployment
const url = 'http://127.0.0.1:8000/api/v1/rest-auth/login/'


export const loggingIn = (data) => {
  return dispatch => {
    dispatch({type: LOGGINGIN})
    axios.post(url, data)
      .then(response => {
        let token = `JWT ${response.data.token}`
        window.localStorage.setItem('Authorization', token)
        dispatch({type: LOGGEDIN})
      })
      .catch(error => {
        dispatch({type: ERROR, payload: error})
      })
  }
}