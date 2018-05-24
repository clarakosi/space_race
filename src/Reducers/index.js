import { combineReducers } from 'redux';
import ShuffleReducer from './ShuffleArrayReducer';

const RootReducers = combinReducers({
    teamsArray: ShuffleReducer
})

export default RootReducers;
