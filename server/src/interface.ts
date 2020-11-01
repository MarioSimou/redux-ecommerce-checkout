import { currencies } from 'src/enums'

export interface Product {
  id: number
  guid: string
  name: string
  price: number
  currency: currencies
} 

export interface HTTPResponseBodyI {
  status: number
  success: boolean
  message?: string
  data?: any
}

export interface User {
  id: number
  guid: string
  username: string
  email: string
}