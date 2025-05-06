/// <reference types = "cypress" />

describe('Registration Test', () => {
    
    it('Registration - Positive Test', () => {
        // User goes to https://www.kitapyurdu.com/
        cy.visit('https://www.kitapyurdu.com/');

        // Accept the cookie
        cy.get('#cookiescript_accept').click()


        // User chooses English from language options 
        //cy.get('.icon-lang-tr').click()

        // OR
        // cy.contains('Türkçe').click()
        cy.contains('English').click({force: true})


        // User clicks on Register option
        cy.get('.register > a').click()

        // Assert that register option is clicked
        cy.contains('Register').should('be.visible')

        // Enter the first Name and then verify it 
        cy.get('#firstname').type('John').should('have.value', 'John')
        
    



    });



    // it('Registration - Negative Test', () => {
        
    // });
});

