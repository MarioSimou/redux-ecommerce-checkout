import * as actions from '../actions/index'
import { CartItemI, ProductI } from '../types/interface'
import redux from 'redux'

export interface cartStateProps {
  items: Array<CartItemI>
  price: number
}

export const initialState: cartStateProps = {
  items: [],
  price: 0
}

interface totalPriceFnI<T> {
  (items: Array<T>): number
}

const getCartPrice: totalPriceFnI<CartItemI> = (items: CartItemI[]): number => items.reduce((acc, item) =>  acc + item.quantity * item.product.price ,0)
const removeCartItem =  (items: CartItemI[], product: ProductI): CartItemI[] => items.filter(cartItem => cartItem.product.guid !== product.guid) as CartItemI[]
const findCartItem =  (items: CartItemI[], product: ProductI): CartItemI => items.find(cartProduct => cartProduct.product.guid === product.guid) as CartItemI
const addCartItem = (items: CartItemI[], product: ProductI, quantity: number): CartItemI[] => [...items, ({ product, quantity}) as CartItemI ]

const cartReducer = (state: cartStateProps = initialState, action: redux.AnyAction) => {
  switch(action.type){
    case actions.ADD_PRODUCT_TO_CART: {
      const {items}: cartStateProps = state
      const product: ProductI = action.payload
      const matchedItem: CartItemI = findCartItem(items, product)
      if(matchedItem){
        const filteredItems: CartItemI[] = removeCartItem(items, product)
        const newItems: CartItemI[] = addCartItem(filteredItems, product, matchedItem.quantity + 1)

        return ({
          ...state,
          items: newItems,
          price: getCartPrice(newItems),
        }) as cartStateProps
      }

      const newItems: CartItemI[] = addCartItem(items, product, 1)
      return {
        ...state,
        items: newItems,
        price: getCartPrice(newItems),
      }
    }
    case actions.REMOVE_PRODUCT_FROM_CART: {
      const {items}: cartStateProps = state
      const product: ProductI = action.payload
      const matchedItem: CartItemI = findCartItem(items, product)

      if(!matchedItem){
        return state
      }

      const newQuantity: number = matchedItem.quantity - 1
      const filteredItems: CartItemI[] = removeCartItem(items, product)

      if(newQuantity === 0){
        return ({
          ...state, 
          items: filteredItems,
          price: getCartPrice(filteredItems),
        }) as cartStateProps
      }

      const newItems = addCartItem(filteredItems, product, matchedItem.quantity - 1)

      return ({
        ...state, 
        items: newItems,  
        price: getCartPrice(newItems),
      }) as cartStateProps
    }

    case actions.RESET_CART:
      return initialState
    default: 
      return state
  }
}

export default cartReducer