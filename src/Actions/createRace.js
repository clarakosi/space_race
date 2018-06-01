export const SEND_FORMDATA = 'send_formdata';
export const SEND_FORMDATA_SUCCESS = 'send_formdata_success';
export const SEND_FORMDATA_FAILURE = 'send_formdata_failure';


/**
 * we will use redux thunk and built in fetch function to POST to the server
 */

export function createRace(data) {
    return function(dispatch)  {
        dispatch({ type: SEND_FORMDATA, payload: data });
                        /**please make sure this is the proper endpoint for the backend */
        const request = fetch('/api/formDataEndpoint', {              
                body: data,
                });
           
        return request.then( 
                response => dispatch(sendSuccess(response.data)),              
                error => dispatch(sendFailure(error)) 
            );
        }
    function sendSuccess(data) { return { type: SEND_FORMDATA_SUCCESS, payload: data } }; 
    function sendFailure(data) { return { type: SEND_FORMDATA_FAILURE, payload: data } };
};   

