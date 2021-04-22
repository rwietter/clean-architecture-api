type HandleHttpRequest = {
  statusCode: number,
  body?: Error
}

type HttpRequest = {
  body: {
    email?: string
    name?: string
    passoword?: string,
    passowordConfirmation?: string
  }
}

class SignUpController {
  handle(httpRequest: HttpRequest): HandleHttpRequest {
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
