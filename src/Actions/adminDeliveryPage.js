import axios from 'axios';

export const GETTINGRACE = 'GETTINGRACE';
export const GOTRACE = 'GOTRACE';
export const ERROR = 'ERROR';

// TODO: Change url for deployment
const url = 'http://127.0.0.1:8000/db';

export const gettingRace = (id) => {
  return dispatch => {
    dispatch({type: GETTINGRACE})
    let token = window.localStorage.getItem('Authorization')
    axios.get(`${url}/${id}/`, {headers: {Authorization: token}})
      .then(response => {
        dispatch({type: GOTRACE, payload: response.data})
        console.log(response.data)
      })
      .catch(error => {
        dispatch({type: ERROR, payload: error})
        console.error(error)
      })
  }
}