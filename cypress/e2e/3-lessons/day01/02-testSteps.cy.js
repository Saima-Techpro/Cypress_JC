///<reference types='cypress' />

describe('Test Steps', () => {
    it('Basic Commands', () => {

        // Given (Pre-condition)
        cy.visit('https://www.amazon.com/');

        // When (action)
        cy.get('#twotabsearchtextbox').type('iPhone 16 {enter}')
   
        // Then (assertion)
        
        cy.url().should('contain', 'iPhone')

        cy.contains('iPhone 16')
        
    });
});