describe('Action commands', () => {
    it('Use of invoke() method ', () => {

        cy.visit('https://www.letskodeit.com/practice');

        cy.get('#mousehover').scrollIntoView()
        cy.wait(2000)
        cy.get('[class="mouse-hover-content"]').invoke('show')
        cy.wait(2000)
        cy.get('[href="#top"]').click()
        
    });


    it.only('invoke() vs trigger() methodon Amazon', () => {

        cy.visit('https://www.amazon.com/');

        // cy.get('#nav-link-accountList').invoke('show');

        cy.get('#nav-link-accountList').trigger('mouseover') // passe
        cy.get('#nav_prefetch_yourorders').click()

    });


/*
    .invoke('show') in Cypress only manipulates the CSS directly — it changes the display style of an element to make it visible. However, it does not trigger JavaScript event listeners like mouseover, mouseenter, or hover, which are what many real-world websites (including eBay) rely on to show dropdown menus or trigger animations.

    */


    it.skip('invoke() vs trigger() method on Ebay', () => { 
        cy.visit('https://www.ebay.com/');

        // cy.get('.gh-my-ebay__link').invoke('show')

        cy.get('.gh-my-ebay__link').trigger('mouseover'); // still failing


        cy.contains('Messages')
        .should('be.visible') // ensure it's really shown
        .click();
        
    });



});