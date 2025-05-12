const { faker, fa } = require("@faker-js/faker");


let fakeFirstName = faker.person.firstName();
let fakeLastName = faker.person.lastName();
let fakeEmail = faker.internet.email();
let fakePassword = faker.internet.password();



describe('Faker for fake data ', () => {

    Cypress.on('uncaught:exception', (err, runnable)=> { 
        return false; // returning false here prevents Cypress from failing the test
    })

    it('Faker Test ', () => {
    

        cy.visit('https://www.kitapyurdu.com/');

        cy.get('#cookiescript_accept').click()
        cy.wait(1000)

        cy.contains('English').click({force: true})

        cy.wait(1000)
        cy.contains('Register').click()


        cy.get('#register-form').within(()=> {
            cy.get('#firstname').type(fakeFirstName)
            cy.get('#lastname').type(fakeLastName)
            cy.get('#email').type(fakeEmail)
            cy.get('#password').type(fakePassword)
            cy.get('#confirm').type(fakePassword)
            cy.get('#form-check-input').check({force: true})

        

        });

        // Now click on Register button 
            cy.get('#register-form').click() // this didn't click because of captcha issue 


        
    });


    it.only('Validating success message', ()=>{
        cy.visit('https://automationexercise.com/login');

        cy.get('[data-qa="login-email"]').type(fakeFirstName)
        cy.get('[data-qa="login-password"]').type(fakeEmail)

        cy.get('[data-qa="login-button"]').click()


        cy.get('[data-qa="login-email"]')
        .invoke('prop', 'validationMessage')
        .should('include', "missing an '@'")

        /*
        NOTES: invoke('prop', 'validationMessage')

        In Cypress, the command .invoke('prop', 'validationMessage') is used to retrieve the built-in browser validation message associated with a form input element (like an <input> or <textarea>), especially when HTML5 form validation is triggered (e.g., required, pattern, etc.).

        .invoke() is a Cypress command used to call a method or access a property on a previously selected DOM element.
        
        'prop' tells Cypress to access a property on the element.
        
        'validationMessage' is a read-only property of form elements that contains the message shown by the browser when the field is invalid due to HTML5 validation rules.


        */

    })


});