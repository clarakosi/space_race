import { combineReducers } from 'redux';
import ShuffleReducer from './ShuffleArrayReducer';
import CreateReducer from './CreateRaceReducer';

const RootReducers = combineReducers({
    TeamsArray: ShuffleReducer,
    FormData: CreateReducer
})

export default RootReducers;
