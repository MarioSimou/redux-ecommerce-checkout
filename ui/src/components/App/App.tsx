import React from 'react';
import styles from './App.module.scss'
import { ProductI, CartProductI } from '../../types/interface';
import ProductsList from '../ProductsList/ProductsList'

export interface AppProps {
  products: Array<ProductI>
  fetchProducts: Function,
  fetchUser: Function,
  fetching: boolean
  cart: Array<CartProductI>
}

const App = ({fetchProducts, fetchUser, products, fetching, cart}: AppProps) => {

  React.useEffect(() => {
    fetchProducts()
    fetchUser()
  },[fetchProducts, fetchUser])

  return (
    <div className={styles.app}>
      <div className={styles.productListWrapper}>
        <ProductsList products={products} fetching={fetching}/>
      </div>
      <div className={styles.checkout}>
        {cart.length === 0 && <h4>Empty Cart</h4>}
        {cart.map((cartProduct) => {
          return (
            <div key={cartProduct.product.guid}>{cartProduct.product.name}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
