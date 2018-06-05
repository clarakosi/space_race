import { combineReducers } from 'redux';
import RTeamReducer from './RandomTeamReducer';
import RColorReducer from './RandomColorReducer';
import CreateReducer from './CreateRaceReducer';
import showRacesReducer from './showRaces';
import LogInReducer from './LogIn';
import adminDeliveryReducer from './adminDeliveryReducer';
import StudentReducer from './studentReducer';

const RootReducers = combineReducers({
    FormData: CreateReducer,
    RandomTeamData: RTeamReducer,
    RandomColorData: RColorReducer,
    // TeamsArray: ShuffleReducer,
    FormData: CreateReducer,
    Races: showRacesReducer,
    LogIn: LogInReducer,
    AdminDelivery: adminDeliveryReducer,
    Student: StudentReducer
})

export default RootReducers;
