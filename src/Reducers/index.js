import { combineReducers } from 'redux';
import ShuffleReducer from './ShuffleArrayReducer';
import CreateReducer from './CreateRaceReducer';
import showRacesReducer from './showRaces';
import LogInReducer from './LogIn';

const RootReducers = combineReducers({
    TeamsArray: ShuffleReducer,
    FormData: CreateReducer,
    Races: showRacesReducer,
    LogIn: LogInReducer
})

export default RootReducers;
