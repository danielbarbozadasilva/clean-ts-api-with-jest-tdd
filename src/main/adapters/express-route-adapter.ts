import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const HttpResponse = await controller.handle(httpRequest)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
  }
}
