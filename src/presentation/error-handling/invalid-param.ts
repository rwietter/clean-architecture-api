class InvalidParamError extends Error {
  constructor(paramError: string) {
    super(`Invalid Param: ${paramError}`);
    this.name = `InvalidParamError`
  }
}

export { InvalidParamError }
