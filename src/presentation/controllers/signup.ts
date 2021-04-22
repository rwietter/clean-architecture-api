type HandleHttpRequest = {
  statusCode: number,
  body: Error
}

class SignUpController {
  handle(httpRequest: unknown): HandleHttpRequest {
    return {
      statusCode: 400,
      body: new Error('missing params: name')
    }
  }
}

export { SignUpController }
