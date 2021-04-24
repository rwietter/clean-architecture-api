import { InvalidParamError } from '../error-handling/invalid-param';
import { MissingParamError } from '../error-handling/missing-params'
import { badRequest } from '../helpers/http'
import { Controller } from '../protocols/controller';
import { EmailValidator } from '../protocols/email-validator';
import { HttpRequest, HttpResponse } from '../protocols/http'

class SignUpController implements Controller {
  readonly #emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.#emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest;

    const requiredFiles = ['name', 'email', 'password', 'passwordConfirmation'];
    
    for (const field of requiredFiles) {
      if (!body[field])
        return badRequest(new MissingParamError(field))
    }

    const isValidEmail = this.#emailValidator.isValid(body['email'])

    if(!isValidEmail) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}

export { SignUpController }
