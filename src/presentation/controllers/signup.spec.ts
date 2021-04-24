import { SignUpController } from './signup'
import { MissingParamError } from '../error-handling/missing-params'
import { InvalidParamError } from '../error-handling/invalid-param';
import { EmailValidator } from '../protocols/email-validator';

type SutType = {
  sut: SignUpController,
  emailValidatorStub: EmailValidator
}

const makeSut = (): SutType => {
  class EmailValidatorStub implements EmailValidator {
    isValid(email: string): boolean {
      return false;
    }
  }

  const emailValidatorStub = new EmailValidatorStub();
  const sut = new SignUpController(emailValidatorStub);

  return {
    sut, 
    emailValidatorStub
  }
};

describe('SignUp Controllers', () => {
  test('Should return 400 if name is not provided', () => {
    const { sut } = makeSut();
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
    const { sut } = makeSut();
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
    const { sut } = makeSut();
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
    const { sut } = makeSut();
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
  }),
    
  test('Should return 400 if is not valid email', () => {
    const { sut, emailValidatorStub } = makeSut();

    // altera o retorno do emailValidatorStub.isValid() para false, para não quebrar os outros testes
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)

    const httpRequest = {
      body: {
        name: 'mauricio',
        email: 'rwietter@zohomail.com',
        password: '12345678',
        passwordConfirmation: '12345678'
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new InvalidParamError('email'));
  })
})
