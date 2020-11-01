import React from 'react';
import styles from './App.module.scss'
import { ProductI } from '../../types/interface';
import ProductsList from '../ProductsList/ProductsList'

export interface AppProps {
  products: Array<ProductI>
  fetchProducts: Function,
  fetching: boolean
}

const App = ({fetchProducts, products, fetching}: AppProps) => {

  React.useEffect(() => {
    fetchProducts()
  },[fetchProducts])

  return (
    <div className={styles.app}>
      <div>
        <ProductsList products={products} fetching={fetching}/>
      </div>
      <div className={styles.form}>
        <div className={styles.header}>
          <h1>Checkout form</h1>
        </div>
        <div className={styles.productDetailsList}>
          list of products details
        </div>
        <div className={styles.orderDetails}>
          order details
        </div>
      </div>
    </div>
  );
}

export default App;
