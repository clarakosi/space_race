import { combineReducers } from 'redux';
import RTeamReducer from './RandomTeamReducer';
import RColorReducer from './RandomColorReducer';
import CreateReducer from './CreateRaceReducer';
import showRacesReducer from './showRaces';
import LogInReducer from './LogIn';

const RootReducers = combineReducers({
    FormData: CreateReducer,
    RandomTeamData: RTeamReducer,
    RandomColorData: RColorReducer,
    // TeamsArray: ShuffleReducer,
    FormData: CreateReducer,
    Races: showRacesReducer,
    LogIn: LogInReducer
})

export default RootReducers;
