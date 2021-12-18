export class MissingParamError extends Error {
  constructor (paramName: String) {
    super(`Invalid Param ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
