describe('XPath locators', () => {
    it('Locating elements by using XPath', () => {
        

        cy.visit('https://www.kitapyurdu.com/');

        // Accept the cookie
        cy.get('#cookiescript_accept').click()

        // Choose English from language options 
        cy.contains('English').click({force: true})


        // Tag Name
        cy.get('//input')

        // ID
        cy.get('//*[@id="search-input"]');

        // Class Name
        cy.get('//div[@class="logo-icon"]');

        // Attribute Value
        cy.get('//div[@class="search-tools"]');

        // Class value
        cy.get('//div[@class="top-menu fr"]');

        // Tag + Attribute +  Value
        cy.get('//input[@id="search-input"]');

         //  Multiple Tags + Attributes + Values
        cy.get('//input[@id="search-input"][@type="text"]');
        cy.get('//div[@id="search-key-button"][@class="common-sprite"]')


    });
});