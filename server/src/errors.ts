import { HTTPResponseBodyI } from 'src/interface'
import { statusCodes } from 'src/enums'

export const ErrBadRequest = 'Error: Invalid request'
export const ErrNotFound = 'Error: Resource not found'
export const ErrInternalServerError = 'Error: We are encountering some internal issues. Please try again'

export const newHTTPResponseBody = (status: number, data: any): HTTPResponseBodyI => {
  switch(status){
    case statusCodes.Ok:
      return {status, success: true, data}
    case statusCodes.NoContent:
      return {status, success: true}
    case statusCodes.BadRequest:
    case statusCodes.NotFound:
    case statusCodes.InternalServerError:
      return {status, success: false, message: data}
    default:
      return {status: statusCodes.BadRequest, success: false, message: ErrBadRequest}
  }
}

