import { MissingParamError } from '../error-handling/missing-params'
import { badRequest } from '../helpers/http'
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http'

class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest;

    const requiredFiles = ['name', 'email', 'password', 'passwordConfirmation'];
    
    for (const field of requiredFiles) {
      if (!body[field])
        return badRequest(new MissingParamError(field))
    }
  }
}

export { SignUpController }
