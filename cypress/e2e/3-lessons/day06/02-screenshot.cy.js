describe('Screenshots', () => {
    it('How to take screenshot', () => {

        cy.visit('https://www.webdriveruniversity.com/')
        cy.screenshot()

        cy.wait(1000)

        cy.get('#login-portal').invoke('removeAttr', 'target').screenshot().click()

        cy.get('.form').screenshot().find('#text').type('John Doe').screenshot()

        cy.get('.form').find('#password').type(12345)
        cy.get('.form').screenshot()


        
    });
});