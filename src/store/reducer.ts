import { combineReducers } from 'redux'
import { cloneDeep } from 'lodash'

const indexInitState = {
  userBalanceInfo: {
    balance: 0
  }
}
const searchInitState = {
  account: {}
}

function index(state = indexInitState, action: any) {
  const newState = cloneDeep(state)
  switch (action.type) {
    case 'updateUserBalanceInfo':
      newState.userBalanceInfo = action.userBalanceInfo
      return newState
    default:
      return state
  }
}
function search(state = searchInitState, action: any) {
  const newState = cloneDeep(state)
  switch (action.type) {
    case 'updateUserAccount':
      newState.account = action.user
      return newState
    default:
      return state
  }
}

const rootReducer = combineReducers({
  index,
  search
})

export default rootReducer
