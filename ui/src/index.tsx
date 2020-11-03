import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.container';
import './index.scss'
import { Provider } from 'react-redux'
import getStore from './utils/getStore'
import { ProductI } from './types/interface';
import { cartStateProps, initialState as cartInitialState } from './reducers/cart';

export interface stateSchema {
  products: Array<ProductI>
  fetching: boolean
  cart: cartStateProps
}

const initalState: stateSchema = {
  products: [],
  fetching: true,
  cart: cartInitialState
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore(initalState)}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);