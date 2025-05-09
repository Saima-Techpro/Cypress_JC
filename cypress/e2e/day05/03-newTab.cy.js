describe('Working in a New Tab', () => {
    it('Working in a New Tab by removing the target attribute', () => {
        cy.visit('https://www.letskodeit.com/practice');

        // Remove attribute 'target' and stop the new tab from opening 
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.get('#search').type('Cypress')
        cy.get('[type="submit"]').click()
    });


    it.only('Working in a New Tab by using the new opening URLs', () => {
        cy.visit('https://www.letskodeit.com/practice');

        cy.visit('https://www.letskodeit.com/courses')

        cy.get('#search').type('Cypress')
        cy.get('[type="submit"]').click()

        // NOTE: Cypress allows visisting different paths within the SAME url and interacting with the webElements
        cy.visit('https://www.letskodeit.com/support');
    
        // Cypress allows to navigate between different urls but doesn't allow to interact with the webelements of the next url 

        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('iPhone')



    });


});