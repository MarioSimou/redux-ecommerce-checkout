import React from 'react'
import {CartItemI} from '../../types/interface'
import styles from './CartItem.module.scss'

interface cardItemProps {
  item: CartItemI
  onChangeCartItemIQuantity: any
}

const CartItem = ({item, onChangeCartItemIQuantity} : cardItemProps) => {

  return (
    <div className={styles.cartItem}>
      <span>
        {item.product.name}
      </span>
      <input type="number" 
             min="0" 
             max="50" 
             value={item.quantity} 
             step="1" 
             onChange={onChangeCartItemIQuantity}/>
    </div>
  )
}

export default CartItem