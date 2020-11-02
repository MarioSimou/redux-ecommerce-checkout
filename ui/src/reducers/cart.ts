import * as actions from '../actions/index'
import { CartProductI } from '../types/interface'
import redux from 'redux'

const cartReducer = (state: Array<CartProductI> = [], action: redux.AnyAction) => {
  switch(action.type){
    case actions.ADD_PRODUCT_TO_CART:
      const product = action.payload
      const existingCartProduct = state.find(cartProduct => cartProduct.product.guid === product.guid)

      if(existingCartProduct){
        return [
          ...state.filter(cartProduct => cartProduct.product.guid !== existingCartProduct.product.guid ), 
          {...existingCartProduct, quantity: existingCartProduct.quantity + 1}
        ]
      }
      return [...state, ({quantity: 1, product }) as CartProductI]
    case actions.RESET_CART:
      return []
    default: 
      return state
  }
}

export default cartReducer