/// <reference types="cypress" />

describe('Demo Site Register Update', () => {
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Users.html')
    cy.title().should('include', 'Users');
  });

  it('deve editar um usuário existente', () => {
    cy.get('#userTable').contains('Teste Automacao').within(() => {
        cy.get('.edit-btn').click();
      });

    cy.url().should('include', '/Users.html');

    cy.get('input[placeholder="Last Name"]').clear().type('Automatizado');
    cy.get('input[type="tel"]').clear().type('11999998888');

    cy.get('#submitbtn').click();

    cy.log('Usuário editado com sucesso: Last Name e Phone atualizados');
  });

})