import { currencies } from './enums'

export interface ProductI {
  id: number
  guid: string
  name: string
  price: number
  image: string
  currency: currencies
} 


export interface UserI {
  id: number
  guid: string
  username: string
  email: string
  avatar: string
}

export interface CartProductI {
  product: ProductI
  quantity: number
}