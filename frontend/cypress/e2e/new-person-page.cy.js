describe('New Person Page', () => {
    it('successfully loads', () => {
        cy.visit('/cadastrarPessoa')

        cy.get('input[name="nome"]').type('João')
        cy.get('input[name="sobrenome"]').type('Silva')
        cy.get('input[name="dataDeNascimento"]').type('01/01/2004')
        cy.get('input[name="email"]').type('joao.silva@gmail.com')
        cy.get('input[name="senha"]').type('123456')

        cy.get('#btn-cadastro-div').click()
    })
})