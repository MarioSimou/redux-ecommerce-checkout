import express from 'express'
import getProduct from 'src/controllers/products/getProduct'
import getProducts from 'src/controllers/products/getProducts'
import getUser from 'src/controllers/users/getUser'
import getUsers from 'src/controllers/users/getUsers'

const router: express.Router = express.Router()

router.get('/products', getProducts)
router.get('/products/:guid', getProduct)
router.get('/users', getUsers)
router.get('/users/:guid', getUser)


export default router