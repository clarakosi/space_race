export const SEND_FORMDATA = 'send_formdata';
export const SEND_FORMDATA_SUCCESS = 'send_formdata_success';
export const SEND_FORMDATA_FAILURE = 'send_formdata_failure';


/**
 * we will use redux thunk and built in fetch function to POST to the server
 */

// TODO: Change url for deployment
const quizUrl = 'http://127.0.0.1:8000/db/quizzes';
const teamUrl =  'http://127.0.0.1:8000/db/teams';


export function createRace(quiz, teams) {
    return function(dispatch)  {
        dispatch({ type: SEND_FORMDATA, payload: {quiz, teams} });
                        /**please make sure this is the proper endpoint for the backend */
        const token = localStorage.getItem('Authorization')
        const request = fetch(quizUrl, { 
            method: 'POST',             
            body: JSON.stringify(quiz),
            headers: {
                'Authorization': token
                }
            });
           
        return request.then(
            // get quiz id from response
            // add quiz id to teams
                // teams.quiz = response.data.id
            // another fetch request to teamURL and send w/ Authorization
                response => dispatch(sendSuccess(response.data)),              
                error => dispatch(sendFailure(error)) 
            );
        }
    function sendSuccess(data) { return { type: SEND_FORMDATA_SUCCESS, payload: data } }; 
    function sendFailure(data) { return { type: SEND_FORMDATA_FAILURE, payload: data } };
};   

