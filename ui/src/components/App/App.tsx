import React from 'react';
import styles from './App.module.scss'
import { ProductI } from '../../types/interface';
import ProductsList from '../ProductsList/ProductsList'
import CartItem from '../CartItem/CartItem.container'
import { cartStateProps } from '../../reducers/cart'

export interface AppProps {
  products: Array<ProductI>
  fetchProducts: Function,
  fetchUser: Function,
  fetching: boolean
  cart: cartStateProps
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
        {cart.items.length === 0 && <h4>Empty Cart</h4>}
        {cart.items.map((cartProduct) => {
          return (
            <CartItem key={cartProduct.product.guid} item={cartProduct} />
          )
        })}
        {cart.price > 0 && <div>Total: {cart.price.toFixed(2)}</div>}
      </div>
    </div>
  );
}

export default App;
