import { SignUpController } from './signup'

describe('SignUp Controllers', () => {
  test('Should return 400 if name is not provided', () => {
    // ust => system under test
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'mauricio',
        email: 'rwietter@zohomail.com',
        passoword: '12345678',
        passowordConfirmation: '12345678'
      }
    }
    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
  })
})
