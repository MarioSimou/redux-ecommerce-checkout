import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.container';
import './index.scss'
import { Provider } from 'react-redux'
import getStore from './utils/getStore'
import { ProductI, CartProductI } from './types/interface';

export interface stateSchema {
  products: Array<ProductI>
  fetching: boolean
  cart: Array<CartProductI>
}

const initalState: stateSchema = {
  products: [],
  fetching: true,
  cart: []
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore(initalState)}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);