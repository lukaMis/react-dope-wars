
import * as constants from '../constants'

const initialState = {
  count: 0
}

export default function clickReducer(state = initialState, action) {
  switch(action.type) {
    
    case constants.CLICK_COUNT:
      return Object.assign({}, state, {count: state.count + 1})

    default:
      return state
  }
}
