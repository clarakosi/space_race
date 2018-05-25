import { SHUFFLE_ARRAY } from '../Actions';
/** this is to be used for choosing random order of teams in the race card view */
const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case SHUFFLE_ARRAY: 
            const array = action.payload
            let i = array.length - 1;
            for (; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return [...array];
            default: return state;
    }
    
}