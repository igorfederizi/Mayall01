describe('POST /users',() => {
  it('Register new User', () => {

    const user = {
      name: 'Igor Teste',
      email: 'igor.federizi@gmail.com',
      password: '123456'
    }

    cy.request({
      url: 'users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
    })


  })

})