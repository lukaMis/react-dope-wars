
import * as constants from '../constants'

const initialState = {
  count: 0
}

export default function clickReducer(state = initialState, action) {
  switch(action.type) {
    
    case constants.CLICK_COUNT:
      return {...state, count: state.count + action.value}

    default:
      return state
  }
}
