// type HandleHttpRequest = {
//   statusCode: number,
//   body?: Error
// }

// type HttpRequest = {
//   body: {
//     email?: string
//     name?: string
//     passoword?: string,
//     passowordConfirmation?: string
//   }
// }

import { HttpRequest, HttpResponse } from '../protocols/http'

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('missing params: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('missing params: email')
      }
    }
  }
}

export { SignUpController }
