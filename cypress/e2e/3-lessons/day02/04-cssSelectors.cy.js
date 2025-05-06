describe('CSS Selectors ', () => {
    it('LOcating elements by using CSS Selectors', () => {
        

        cy.visit('https://www.kitapyurdu.com/');

        // Accept the cookie
        cy.get('#cookiescript_accept').click()

        // Choose English from language options 
        cy.contains('English').click({force: true})


        // Tag Name
        cy.get('input')

        // ID
        cy.get('#search-input');

        // Class Name
        cy.get('.logo-icon');

        // Attribute Value
        cy.get('[class="search-tools"]');

        // Class value
        cy.get('[class="top-menu fr"]');

        // Tag + Attribute +  Value
        cy.get('input[id="search-input"]');

         //  Multiple Tags + Attributes + Values
        cy.get('input[id="search-input"][type="text"]');
        cy.get('div[id="search-key-button"][class="common-sprite"]')


    });
});