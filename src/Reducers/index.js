<<<<<<< HEAD
import { combineReducers } from 'redux';
import ShuffleReducer from './ShuffleArrayReducer';

const RootReducers = combinReducers({
    teamsArray: ShuffleReducer
})

export default RootReducers;
=======
const rootReducer = (state=[], action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default rootReducer;
>>>>>>> 8911845d95c4d100e9d5092bc1d6a1950bb56619
