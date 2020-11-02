import { combineReducers } from 'redux'
import productsReducer from './products'
import fetchingReducer from './fetching'
import userReducer from './user'
import cartReducer from './cart'

const reducers = combineReducers({
  products: productsReducer,
  fetching: fetchingReducer,
  user: userReducer,
  cart: cartReducer,
})

export default reducers