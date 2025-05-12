describe('Handling shadow root issue', () => {
    it('Use of shadow() and find() methods', () => {

        cy.visit('https://practice.expandtesting.com/shadowdom');

        // cy.get('#my-btn').click() => failed because the button is HIDDEN inside a shadow
        // So to get to this button, we need to locate the element which has shadow inside it => //div[@id="shadow-host"] here on this website 

        // cy.get('div[@id="shadow-host"]');
        // OR 
        cy.get('#shadow-host').shadow().find('#my-btn').click().should('be.visible').and('have.text', 'This button is inside a Shadow DOM.')


        // shadow() method reveals the elements that are hidden inside a shadow. 
        // After this shadow(), we can carry on with find() and other chain methods
        
    });
});