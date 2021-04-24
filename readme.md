```
eslint                | rules to format code
husky                 | active git hooks
lint-staged           | validate just new files or modified files
```
### Tests - [Type of Mocks](http://blog.tremblay.pro/2017/09/mocks.html)
- Dummy
- Stub

```typescript
const makeSut = (): SignUpController => {
  class EmailValidatorStub {
    isValid(email: string): boolean {
      return true
    }
  }
}
```

- Spy
- True Mock
- Fake

### Dicas
- Sempre que for usar algum Stub e retornar uma valor direto, ele precisa ser positivo, aí você faz mock dele no teste específico para retornar um negativo. Assim, não irá influenciar nos outros testes.
