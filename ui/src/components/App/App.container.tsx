import App from './App'
import { connect } from 'react-redux'
import redux from 'redux'
import { GET_PRODUCTS } from '../../actions/products'
import {stateSchema} from '../../index'

const mapStateToProps = ({products, fetching}: stateSchema) => ({
  products,
  fetching,
})

const mapDispatchToProps = (dispatch: redux.Dispatch) => ({
  fetchProducts: () => dispatch({type: GET_PRODUCTS})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
