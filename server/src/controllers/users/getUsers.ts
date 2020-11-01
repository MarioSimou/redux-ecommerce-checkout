import express from 'express'
import { statusCodes } from 'src/enums'
import * as e from 'src/errors'
import db from 'db.json'

const getUsers =  async (_: express.Request, res: express.Response) => {
  res.status(statusCodes.Ok)
     .json(e.newHTTPResponseBody(statusCodes.Ok, db.users))
}

export default getUsers