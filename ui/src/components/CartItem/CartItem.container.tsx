import CartItem from './CartItem'
import { connect } from 'react-redux'
import { CartItemI } from '../../types/interface'
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../../actions'
import redux from 'redux'

const mapStateToProps= () => ({})

const onChangeCartItemIQuantity = (dispatch: redux.Dispatch, cartItem: CartItemI) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const quantity: number = parseInt(e.target.value, 10)
  const quantityChange: number = quantity - cartItem.quantity
  
  if(quantityChange === 1){
    return dispatch({type: ADD_PRODUCT_TO_CART, payload: cartItem.product})
  }
  if(quantityChange === -1){
    return dispatch({type: REMOVE_PRODUCT_FROM_CART, payload: cartItem.product})
  }
}

const mapDispatchToProps = (dispatch: redux.Dispatch, ownProps: any) => ({
  onChangeCartItemIQuantity: onChangeCartItemIQuantity(dispatch, ownProps.item)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
