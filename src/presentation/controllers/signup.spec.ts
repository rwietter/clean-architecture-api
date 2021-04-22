import { SignUpController } from './signup'

describe('SignUp Controllers', () => {
  test('Should return 400 if name is not provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'rwietter@zohomail.com',
        passoword: '12345678',
        passowordConfirmation: '12345678'
      }
    }
    
    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('missing params: name'));
  }),
    
  test('Should return 400 if email is not provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'mauricio',
        passoword: '12345678',
        passowordConfirmation: '12345678'
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('missing params: email'));
  })
})
