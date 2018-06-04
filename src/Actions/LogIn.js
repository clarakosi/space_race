import axios from 'axios';

export const LOGGINGIN = 'LOGGINGIN';
export const LOGGEDIN = 'LOGGEDIN';
export const ERROR = 'ERROR';


// TODO: change url for deployment
const url = 'http://127.0.0.1:8000/api/v1/rest-auth/login/'


// TODO: Utilize key from response.data to properly log in user
export const loggingIn = (data) => {
  return dispatch => {
    dispatch({type: LOGGINGIN})
    axios.post(url, data)
      .then(response => {
        // console.log(response.headers.get('set-cookie'))
        let token = `Token ${response.data.key}`
        window.localStorage.setItem('Authorization', token)
        dispatch({type: LOGGEDIN})
      })
      .catch(error => {
        dispatch({type: ERROR, payload: error})
      })
  }
}