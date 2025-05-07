describe('Test using Xpath', () => {
    it('Test using Xpath', () => {
        

        cy.visit('https://automationteststore.com/');
        cy.url().should('contain', 'automationteststore')

        cy.title().should('contain', 'A place to practice your automation') // passes
        // cy.title().should('eq', 'A place to practice your automation ') // fail => eq looks for exact match of the expected text

        //cy.get('#customer_menu_top > li > a').click()

        cy.xpath('//*[@id="customer_menu_top"]/li/a').click()

        cy.xpath('//input[@id="loginFrm_loginname"]').type('techpro')

        cy.xpath('//input[@id="loginFrm_password"]').type('Techpro!')

        cy.xpath('//button[@title="Login"]').click()

        cy.title().should('contain','My Account')

        cy.xpath('//*[@id="maincontainer"]/div/div[2]/div[1]/h2/span').should('contain.text', 'My Account')

    });
});