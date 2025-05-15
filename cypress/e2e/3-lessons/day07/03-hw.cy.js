const { faker, fa } = require("@faker-js/faker");
describe('test empty fields', () => {
    it('test empty fields', () => {
        
        let email = faker.internet.email();
        let password = faker.internet.password() + '2!' ;// this password() doesn't always generate a password with a special character so we concatenate it with !

   

         // Use writeFile() method to store the generated email and password as a file 

        cy.writeFile('files/email.txt', email)
        cy.writeFile('files/password.txt', password)

        cy.visit('https://practicesoftwaretesting.com/');
        // Click on Sign In option 
        cy.get('[data-test="nav-sign-in"]').click()
        // Click on register link 
        cy.get('[data-test="register-link"]').click()
        cy.wait(1000)

        // Fill in the form 

        cy.get('[data-test="register-form"]').within(()=>{

            cy.get('[data-test="register-submit"]').click()


        })
        // Verify the Login is successful

        cy.get('[data-test="first-name-error"]').should('be.visible').and('have.text', ' First name is required ')
        cy.get('[data-test="last-name-error"]').should('be.visible').and('have.text', ' fields.last-name.required ')
        cy.get('[data-test="dob-error"]').should('be.visible').and('have.text', ' Date of Birth is required ')
        cy.get('[data-test="street-error"]').should('be.visible').and('have.text', ' Street is required ')
        cy.get('[data-test="postal_code-error"]').should('be.visible').and('have.text', ' Postcode is required ')
        cy.get('[data-test="city-error"]').should('be.visible').and('have.text', ' City is required ')
        cy.get('[data-test="state-error"]').should('be.visible').and('have.text', ' State is required ')
        cy.get('[data-test="country-error"]').should('be.visible').and('have.text', ' Country is required ')
        cy.get('[data-test="phone-error"]').should('be.visible').and('have.text', ' Phone is required. ')
        cy.get('[data-test="email-error"]').should('be.visible').and('have.text', ' Email is required ')
        cy.get('[data-test="password-error"]').should('be.visible').and('include.text', ' Password is required ')
        //cy.get('h3').should('be.visible').and('have.text', 'Login').screenshot()

     });
});