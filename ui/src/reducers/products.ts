import redux from 'redux'
import { ProductI } from '../types/interface'
import * as actions from '../actions/index'

const initialState: Array<ProductI> = []

const productsReducer = (state = initialState, action: redux.AnyAction) => {
  switch(action.type){
    case actions.GET_PRODUCTS:
      return state
    case actions.RESET_PRODUCTS:
      return initialState
    case actions.SET_PRODUCTS:
      return [...state, ...action.payload ]
    default:
      return state
  }
}

export default productsReducer

