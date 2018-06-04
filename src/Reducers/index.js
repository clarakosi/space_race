import { combineReducers } from 'redux';
import RTeamReducer from './RandomTeamReducer';
import RColorReducer from './RandomColorReducer';
import CreateReducer from './CreateRaceReducer';

const RootReducers = combineReducers({
    FormData: CreateReducer,
    RandomTeamData: RTeamReducer,
    RandomColorData: RColorReducer,
})

export default RootReducers;
