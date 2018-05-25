import { combineReducers } from 'redux';
import ShuffleReducer from './ShuffleArrayReducer';

const RootReducers = combineReducers({
    teamsArray: ShuffleReducer
})

export default RootReducers;
