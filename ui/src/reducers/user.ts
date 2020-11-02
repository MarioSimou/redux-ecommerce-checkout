import { UserI } from '../types/interface'
import redux from 'redux'
import * as actions from '../actions/user'

const initialState = ({}) as UserI

const userReducer = (state: UserI = initialState , action: redux.AnyAction) => {
  switch(action.type){
    case actions.GET_USER:
      return state
    case actions.SET_USER:
      return action.payload
    case actions.RESET_USER:
      return initialState
    default:
      return state
  }
}

export default userReducer