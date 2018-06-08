import {GETTINGRACE, GOTRACE, ERROR, GOTQUIZ} from '../Actions/adminDeliveryPage';

const initialState = {
  gettingRace: false,
  gotRace: false,
  gotQuiz: false,
  quiz: null,
  race: null, 
  error: null,
}



const adminDeliveryReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTINGRACE:
      return {...state, gettingRace: true}
    case GOTRACE:
      return {...state, gettingRace: false, gotRace: true, race: action.payload};
    case GOTQUIZ:
      return {...state, gotQuiz: false, quiz: action.payload}
    case ERROR:
      return {...state, gettingRace: false, gotRace: false, error: action.payload}
    default:
      return state

  }
}

export default adminDeliveryReducer;