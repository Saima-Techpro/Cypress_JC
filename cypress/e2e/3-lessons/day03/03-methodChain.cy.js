describe('Method Chaining', () => {
    it('Method chain', () => {

        cy.visit('https://automationteststore.com/');

    // Click on 'Contact Us' in the footer section 

    cy.get('.info_links_footer').contains('Contact Us').click()

    // Fill in the form fields
    // 1st way: 
    // cy.get('#ContactUsFrm_first_name').type('John')
    // cy.get('#ContactUsFrm_email').type('john_doe@gmail.com')
    // cy.get('#ContactUsFrm_enquiry').type('Hello, good evening!')
    // cy.get('.col-md-6 > .btn').click()

    // 2nd way: 
    cy.get('#ContactUsFrm').within(()=> {
        cy.get('#ContactUsFrm_first_name').type('John')
        cy.get('#ContactUsFrm_email').type('john_doe@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Hello, good evening!')
        cy.get('.col-md-6 > .btn').click()
    });


    // Assertion 

    cy.get('.mb40')
        .find('p')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Your enquiry has been successfully sent to the store owner!')


        
    });
});