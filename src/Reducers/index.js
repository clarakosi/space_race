import { combineReducers } from 'redux';
import ShuffleReducer from './ShuffleArrayReducer';
import CreateReducer from './CreateRaceReducer';
import showRacesReducer from './showRaces';
import LogInReducer from './LogIn';
import adminDeliveryReducer from './adminDeliveryReducer';
import StudentReducer from './studentReducer';

const RootReducers = combineReducers({
    TeamsArray: ShuffleReducer,
    FormData: CreateReducer,
    Races: showRacesReducer,
    LogIn: LogInReducer,
    AdminDelivery: adminDeliveryReducer,
    Student: StudentReducer
})

export default RootReducers;
