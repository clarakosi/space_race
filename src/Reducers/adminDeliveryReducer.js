import {GETTINGRACE, GOTRACE, ERROR, NEXTQUESTION} from '../Actions/adminDeliveryPage';

const initialState = {
  gettingRace: false,
  gotRace: false,
  race: null, 
  error: null,
  index: 0
}



const adminDeliveryReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTINGRACE:
      return {...state, gettingRace: true}
    case GOTRACE:
      return {...state, gettingRace: false, gotRace: true, race: action.payload};
    case NEXTQUESTION:
      return {...state, index: state.count + 1}
    case ERROR:
      return {...state, gettingRace: false, gotRace: false, error: action.payload}
    default:
      return state

  }
}

export default adminDeliveryReducer;