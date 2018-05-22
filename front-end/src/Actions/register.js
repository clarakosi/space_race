import history from '../Helpers';
export const REGISTER_REQUEST = 'register_request';
export const REGISTER_FAILURE = 'register_falure';
export const REGISTER_SUCCESS = 'register_success;'

/***NOTE we will need backend functions for theach action type */
function register(user) {
    return dispatch => {
        dispatch(request(user));

        register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: REGISTER_REQUEST, user } }
    function success(user) { return { type: REGISTER_SUCCESS, user } }
    function failure(error) { return { type: REGISTER_FAILURE, error } }
}
