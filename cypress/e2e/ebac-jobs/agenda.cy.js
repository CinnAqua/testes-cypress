/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve editar um contato existente', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Batman')
        cy.get('input[type="email"]').clear().type('batman@email.com')
        cy.get('input[type="tel"]').clear().type('1212121212')
        cy.get('.alterar').click()
        cy.screenshot('contato-alterado')
    })
    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Miguel')
        cy.get('input[type="email"]').type('miguel@email.com')
        cy.get('input[type="tel"]').type('0123456789')
        cy.get('.adicionar').click()
        cy.screenshot('contato-adicionado')
    })
    it('Deve deletar um contato existente', () => {
        cy.get('.delete').first().click()
        cy.screenshot('contato-deletado')
    })
})