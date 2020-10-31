import React from 'react';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
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
