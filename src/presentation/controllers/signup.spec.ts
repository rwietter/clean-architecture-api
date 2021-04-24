import { SignUpController } from './signup'
import { MissingParamError } from '../error-handling/missing-params'

const makeSut = () => new SignUpController();

describe('SignUp Controllers', () => {
  test('Should return 400 if name is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        email: 'rwietter@zohomail.com',
        passoword: '12345678',
        passowordConfirmation: '12345678'
      }
    }
    
    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  }),
    
  test('Should return 400 if email is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'mauricio',
        password: '12345678',
        passwordConfirmation: '12345678'
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  }),
    
  test('Should return 400 if password is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'mauricio',
        email: 'rwietter@zohomail.com',
        passwordConfirmation: '12345678'
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('password'));
  }),
    
  test('Should return 400 if passwordConfirmation is not provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'mauricio',
        email: 'rwietter@zohomail.com',
        password: '12345678',
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'));
  })
})
