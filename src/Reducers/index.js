import { combineReducers } from 'redux';
import ShuffleReducer from './ShuffleArrayReducer';
import CreateReducer from './CreateRaceReducer';
import showRacesReducer from './showRaces';
import LogInReducer from './LogIn';
import adminDeliveryReducer from './adminDeliveryReducer';

const RootReducers = combineReducers({
    TeamsArray: ShuffleReducer,
    FormData: CreateReducer,
    Races: showRacesReducer,
    LogIn: LogInReducer,
    AdminDelivery: adminDeliveryReducer
})

export default RootReducers;
