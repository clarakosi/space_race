import { SEND_FORMDATA, SEND_FORMDATA_SUCCESS, SEND_FORMDATA_FAILURE }  from '../Actions';
let FormData = {};
export default (state = FormData, action) => {
    switch (action.type) {
        case SEND_FORMDATA:     
            if (action.payload.data){ 
              action.payload.data = {...FormData};
            }
            return {...state};
       
        case SEND_FORMDATA_FAILURE:
            if (action.payload === null) {
                alert('please fill out the appropriate fields');   
            } else  {
                    return(Error);
            }
            return { ...state };
       
        case SEND_FORMDATA_SUCCESS:
            if (action.payload.data !== null){
                return {...FormData};
            }
            break
        default:
            return state;
    }
}