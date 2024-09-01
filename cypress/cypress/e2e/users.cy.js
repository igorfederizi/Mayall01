describe('POST /users',() => {
  it('Register new User', () => {

    const user = {
      name: 'Igor Teste',
      email: 'igor.federizi@gmail.com',
      password: '123456'
    }

    cy.task('deleteUser', user.email)

    cy.request({
      url: 'users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    })


  })

})