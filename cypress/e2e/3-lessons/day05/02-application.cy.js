describe('Action Commands', () => {
    /*
https://automationteststore.com
Login ol
Login Name = techpro
Password = Techpro!
Click on “Manage Address Book” in the “Welcome back …” menu 
Click on the Edit button 
Change all the information in the form and save 
Verify that the changes have been applied

    */
    it('Application of Action Commands', () => {
        cy.visit('https://automationteststore.com/');

        cy.get('#customer_menu_top').click()

        cy.get('#loginFrm').within(()=>{

            cy.get('#loginFrm_loginname').type('techpro')

            cy.get('#loginFrm_password').type('Techpro!')
    
            cy.get('[title="Login"]').click()

        })

        // Hover over the menu to reveal options 

        // cy.get('#customer_menu_top').click() => This clicks but doesn't open the dropdown 
        cy.get('#customer_menu_top').trigger('mouseover')
    
        cy.contains('Manage Address Book').click()


        // Click on the Edit button 
        cy.get('[title="Edit"]').click()

        // Update the address form 
        cy.get('#AddressFrm_firstname').clear().type('Muhammad')

        cy.get('#AddressFrm_lastname').clear().type('Boukadida')

        cy.get('#AddressFrm_company').clear().type('TechPro')

        cy.get('#AddressFrm_address_1').clear().type('Highway')

        cy.get('#AddressFrm_city').clear().type('Munich')

        cy.get('#AddressFrm_zone_id').select('1255') // by value

        cy.get('#AddressFrm_country_id').select('Germany')
        
        cy.get('#AddressFrm_postcode').clear().type('55116')

        cy.get('#AddressFrm_default0').click()
        cy.get('[title="Continue"]').click();


        // Verification 
        cy.get('.alert').should('exist').and('contain', 'Your address has been successfully updated')
       
        
    });
});