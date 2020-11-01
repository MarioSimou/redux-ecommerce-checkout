import { combineReducers } from 'redux'
import productsReducer from './products'
import fetchingReducer from './fetching'

const reducers = combineReducers({
  products: productsReducer,
  fetching: fetchingReducer,
})

export default reducers