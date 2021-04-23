type HttpResponse = {
  statusCode: number,
  body: unknown
}

type HttpRequest = {
  body?: any
}

export {
  HttpResponse,
  HttpRequest
}
