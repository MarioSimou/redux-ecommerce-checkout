import App from './App'
import { connect } from 'react-redux'
import redux from 'redux'
import { GET_PRODUCTS, GET_USER } from '../../actions/index'
import {stateSchema} from '../../index'

const mapStateToProps = ({products, fetching, cart}: stateSchema) => ({
  products,
  fetching,
  cart,
})

const mapDispatchToProps = (dispatch: redux.Dispatch) => ({
  fetchProducts: () => dispatch({type: GET_PRODUCTS}),
  fetchUser: () => dispatch({type: GET_USER, payload: "d922bc95-a573-476f-9823-951cbc9b25ef"})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
