import { MissingParamError } from '../error-handling/missing-params'
import { badRequest } from '../helpers/http'
import { HttpRequest, HttpResponse } from '../protocols/http'

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const { name, email } = httpRequest.body;

    if (!name)
      return badRequest(new MissingParamError('name'))

    if (!email)
      return badRequest(new MissingParamError('email'))
  }
}

export { SignUpController }
