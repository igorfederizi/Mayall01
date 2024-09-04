describe('POST /users', () => {
  it('Register new User', () => {

    const user = {
      name: 'Igor Teste',
      email: 'igor.federizi@gmail.com',
      password: '123456'
    }

    cy.task('deleteUser', user.email)

    cy.postUser(user)
      .then(response => {
        expect(response.status).to.eq(200)
      })
  })
})