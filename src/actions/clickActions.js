
import * as constants from '../constants'

export function clickAction() {
  return {
    type: constants.CLICK_COUNT,
    value: 1
  }
}
