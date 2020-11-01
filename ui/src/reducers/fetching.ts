import redux from 'redux'
import * as actions from '../actions/index'

const fetching = (state: boolean = true, action: redux.Action) => {
  switch(action.type){
    case actions.FETCHING:
      return true
    case actions.FETCHED:
      return false
    default:
      return state
  }
}

export default fetching