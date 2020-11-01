import React from 'react'
import { ProductI } from '../../types/interface'
import styles from './ProductCard.module.scss'

export interface productCardProps {
  product: ProductI
}

const ProductCard = ({product}: productCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {product.guid}
      </div>
      <div className={styles.main}>
          <h3>{product.name}</h3>
          <p>{product.price}&nbsp;{product.currency}</p>
      </div>
    </div>
  )
}

export default ProductCard