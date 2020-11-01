import express from 'express'
import { statusCodes } from 'src/enums'
import * as e from 'src/errors'
import db from 'db.json'
import { User } from 'src/interface'

const getUser = async(req: express.Request, res: express.Response) => {
  const params : { [key: string]: string; } = req.params

  const user: User = <User>db.users.find(user => user.guid === params.guid)
  
  if(!user){
    return res.status(statusCodes.NotFound)
              .json(e.newHTTPResponseBody(statusCodes.NotFound, e.ErrNotFound))
  }

  return res.status(statusCodes.Ok)
            .json(e.newHTTPResponseBody(statusCodes.Ok, user))
}

export default getUser