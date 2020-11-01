import express from 'express'
import { statusCodes } from 'src/enums'
import * as e from 'src/errors'
import db from 'db.json'
import { Product } from 'src/interface'

const getProduct = async(req: express.Request, res: express.Response) => {
  const params : { [key: string]: string; } = req.params

  const product: Product = <Product>db.products.find(product => product.guid === params.guid)
  
  if(!product){
    return res.status(statusCodes.NotFound)
              .json(e.newHTTPResponseBody(statusCodes.NotFound, e.ErrNotFound))
  }

  return res.status(statusCodes.Ok)
            .json(e.newHTTPResponseBody(statusCodes.Ok, product))
}

export default getProduct