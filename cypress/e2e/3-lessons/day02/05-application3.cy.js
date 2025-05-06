describe('Using CSS Selectors', () => {
    it('Using CSS Selectors', () => {

        cy.visit('https://automationteststore.com/');

        cy.url().should('contain', 'automationteststore')

        cy.title().should('contain', 'A place to practice your automation') // passes
        // cy.title().should('eq', 'A place to practice your automation ') // fail => eq looks for exact match of the expected text

        //cy.get('#customer_menu_top > li > a').click()

        cy.contains('Login').click()

        cy.get('#loginFrm_loginname').type('techpro')

        cy.get('#loginFrm_password').type('Techpro!')

        cy.get('[title="Login"]').click()

        cy.get('span[class="menu_text"]').should('contain.text', 'Welcome')
    
    });
});