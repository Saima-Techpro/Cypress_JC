describe('Na', () => {
    it('Using back, forward and refresh in the browser', () => {

        // homepage
        cy.visit('https://www.webdriveruniversity.com/'); 

        // Contact us page
        cy.get('#contact-us').invoke('removeAttr', 'target').click() 

        // verification
        cy.url().should('include', 'Contact-Us')
        cy.wait(2000)

        // Go back to Homepage
        cy.go('back')
        cy.url().should('include', 'https://www.webdriveruniversity.com/')
         cy.wait(2000)

        // Go forward
        cy.go('forward')
        cy.url().should('include', 'Contact-Us')
        cy.wait(2000)

        // Go back to Homepage
        cy.go(-1)
        cy.url().should('include', 'https://www.webdriveruniversity.com/')

        // Refresh the Homepage
        cy.reload()

        // Force to refresh
        cy.reload(true)  // relaods the homepage 

        // cy.reload(true) => true forces the reload without cache memory.

        
    });
});