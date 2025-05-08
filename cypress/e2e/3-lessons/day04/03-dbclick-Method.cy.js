/// <reference types="cypress" />


describe('Action Commands', () => {

    Cypress.on('uncaught:exception', (err, runnable)=> { 
        return false; // returning false here prevents Cypress from failing the test
    })

    /*
    NOTE:
    Cypress.on => is the correct global way to handle uncaught exceptions

    DIFFERENCE:
    cy.on(...) => works for DOM elements, not for global events.
    Cypress.on(...) => Listens for Cypress-global events, like 'uncaught:exception', 'fail', etc.

    */
    it('Use of dbclick() method', () => {
        
        cy.visit('https://demoqa.com/buttons');

        // Perform double click on a button
        //cy.get('#doubleClickBtn').click().click(); => this doesn't work
         cy.get('#doubleClickBtn').dblclick()
        //cy.get('#doubleClickBtn').dblclick('top')

    // Verify dbclick() worked

    cy.get('#doubleClickMessage').should('be.visible').and('exist').and('have.text', 'You have done a double click')


    // NOTE: We can use all value, coordiantes and options with dblclick() the same way we used with click() method
    // cy.get('#doubleClickBtn').dblclick('top');
    // cy.get('#doubleClickBtn').dblclick(10, 10);
    // cy.get('#doubleClickBtn').dblclick('top', {force:true});

    });




});
