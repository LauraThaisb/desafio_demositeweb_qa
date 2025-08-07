/// <reference types="cypress" />

describe('Demo Site Register', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })
    cy.visit('https://demo.automationtesting.in/Register.html')
    cy.title().should('include', 'Register');
  });

    it('deve preencher o formulário de inscricao', () => {

        cy.get('input[placeholder="First Name"]').type('Teste');
        cy.get('input[placeholder="Last Name"]').type('Automacao');
        cy.get('textarea[ng-model="Adress"]').type('Rua dos Testes, 123');
        cy.get('input[type="email"]').type('teste.automacao@example.com');
        cy.get('input[type="tel"]').type('9876543210');
        cy.get('input[value="Male"]').check({ force: true });

        cy.get('#checkbox1').check({ force: true }); 
        cy.get('#checkbox2').check({ force: true }); 

        //cy.get('#msdd').click({ force: true });
        //cy.get('ui-corner-all').contains('English').click({ force: true });
        //cy.get('body').click();
    
        cy.get('#Skills').select('Analytics');
    
        //cy.get('#countries').select('Brazil');

        cy.get('[role="combobox"]').click();
        cy.get('.select2-search__field').type('Australia');
        cy.get('.select2-results__option').contains('Australia').click();

        cy.get('#yearbox').select('1990');
        cy.get('select[placeholder="Month"]').select('January');
        cy.get('#daybox').select('15');
    
        cy.get('#firstpassword').type('Senha@123');
        cy.get('#secondpassword').type('Senha@123');
    
        cy.get('#submitbtn').click();

        cy.url().should('include', '/Register.html');
        cy.get('body').contains('Email already exists').should('be.visible');

    })

})