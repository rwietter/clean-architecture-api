import { MissingParamError } from '../error-handling/missing-params'
import { badRequest } from '../helpers/http'
import { HttpRequest, HttpResponse } from '../protocols/http'

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest;

    const requiredFiles = ['name', 'email'];
    
    for (const field of requiredFiles) {
      if (!body[field])
        return badRequest(new MissingParamError(field))
    }
  }
}

export { SignUpController }
