/// <reference types="cypress" />

describe('Action Commands', () => {

    Cypress.on('uncaught:exception', (err, runnable)=> { 
        return false; // returning false here prevents Cypress from failing the test
    })



    it('Use of rightClick() method', ()=>{

        cy.visit('https://demoqa.com/buttons');

        // Perform right click on a button
        cy.get('#rightClickBtn').rightclick();


        cy.get('#rightClickMessage').should('be.visible').and('exist').and('have.text', 'You have done a right click');


    })




});