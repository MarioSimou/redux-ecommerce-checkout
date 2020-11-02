import React, { MouseEventHandler } from 'react'
import { ProductI } from '../../types/interface'
import styles from './ProductCard.module.scss'

export interface productCardProps {
  product: ProductI
  onAddProductInCart: MouseEventHandler
}

const ProductCard = ({product, onAddProductInCart}: productCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={product.image} alt={product.name} title={product.name}/>
      </div>
      <div className={styles.main}>
          <h3>{product.name}</h3>
          <p>{product.price}&nbsp;{product.currency}</p>
      </div>
      <div className={styles.footer}>
        <button type="button" onClick={onAddProductInCart}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard