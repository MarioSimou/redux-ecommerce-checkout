import {connect} from 'react-redux'
import ProductCart from './ProductCard'
import { ADD_PRODUCT_TO_CART } from '../../actions'
import redux from 'redux'
import { ProductI } from '../../types/interface'

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch: redux.Dispatch, ownProps: {product: ProductI}) => ({
  onAddProductInCart: () => dispatch({type: ADD_PRODUCT_TO_CART, payload: ownProps.product})
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart)