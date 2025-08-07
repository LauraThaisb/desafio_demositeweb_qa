/// <reference types="cypress" />

describe('Demo Site Register Delete', () => {
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Users.html')
    cy.title().should('include', 'Users');
  });

  it('deve deletar um usuário existente', () => {
    cy.get('#userTable').contains('Teste Automacao').as('usuariodelete');

    cy.get('@usuariodelete').within(() => {
      cy.get('.delete-btn').click();
    });

    cy.get('@usuariodelete').invoke('remove');

    cy.get('#userTable').should('not.contain', 'Teste Automacao');
    cy.log('Usuário excluido com sucesso');
  });

})