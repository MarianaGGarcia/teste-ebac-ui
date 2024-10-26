///<reference types="cypress"/>

describe('funcionalidade: login', () => {

   it ('deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('marianarg1956@gmail.com')
    cy.get('#password').type('luz123456!')
    cy.get('.woocommerce-form > .button').click ()


    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, marianarg1956 (não é marianarg1956? Sair)')
})
   
})


