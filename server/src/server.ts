import express from 'express'
import { Product } from 'src/interface'
import * as db from '../db.json'

const port: number = parseInt(<string>process.env.PORT, 10) || 8081 
const app: express.Application = express()


app.get("/products", async (_: express.Request, res: express.Response) => {
  res.json(db.products)
})

app.get('/product/:guid', async(req: express.Request, res: express.Response) => {
  const params : { [key: string]: string; } = req.params

  const product: Product = <Product>db.products.find(product => product.guid === params.guid)
  
  if(!product){
    return res.status(404)
  }

  return res.status(200).json(product)
})


app.listen(port, () => console.log(`The app listens on port ${port}`))