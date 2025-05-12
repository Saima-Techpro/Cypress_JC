describe('Iframes in Cypress', () => {
    it('Use of iframe() and find() methods', () => {

        cy.visit('https://www.letskodeit.com/practice');

        // cy.get('[name="categories"]').click() // failed because this element is inside an iFrame 

        // So we need to locate the iframe first

        cy.frameLoaded('#courses-iframe') // frameLoaded() method is used to locate the iframe

        cy.wait(2000)
    
        cy.iframe().find('select[name="categories"]').select('Cypress')


        cy.iframe()
        .find('select[name="categories"] option:selected')
        .scrollIntoView()
        .should('be.visible')
        .should('have.text', 'Cypress')

        cy.wait(2000)
        // Take screenshot separately 
        cy.iframe()
        .find('select[name="categories"] option:selected')
        .screenshot() // error 

        /*
        This is a known Cypress limitation:
        Cypress cannot take screenshots of <option> elements inside <select>.
        Why?
        <option> elements are rendered by the browser's native UI, outside the DOM tree Cypress captures.
        Cypress "sees" them, can make assertions on them, but cannot visually screenshot them because they have no drawable area.
        */
        

       



        
    });
});

     