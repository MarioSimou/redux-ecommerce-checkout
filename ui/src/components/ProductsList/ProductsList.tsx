import React from 'react'
import ProductCard from '../ProductCard/ProductCard.container'
import { ProductI } from '../../types/interface'
import loader from '../../imgs/loader.gif'
import styles from './ProductList.module.scss'

export interface productsListProps {
  fetching: boolean
  products: Array<ProductI>
}

const ProductsList = ({products, fetching} : productsListProps) => {
  return (
    <div className={styles.list}>
      {fetching && <img src={loader} title="loader" alt="loader"/>}
      {!fetching && products.map((product: ProductI) => {
        return (
          <ProductCard key={product.guid} product={product}/>
        )
      })}
    </div>
  )
}

export default ProductsList