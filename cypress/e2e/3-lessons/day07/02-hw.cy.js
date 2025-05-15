const { faker, fa } = require("@faker-js/faker");
describe('Contact form', () => {
        
    it.only('Verify that registration can be completed with valid data', () => {
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

            cy.get('[data-test="first-name"]').type(faker.person.firstName())
            cy.get('[data-test="last-name"]').type(faker.person.lastName())
            cy.get('[data-test="dob"]').type('2000-05-14')  // faker.date is not a function

            cy.get('[data-test="street"]').type(faker.location.street())
            cy.get('[data-test="postal_code"]').type(faker.location.zipCode())
            cy.get('[data-test="city"]').type(faker.location.city())
            cy.get('[data-test="state"]').type(faker.location.state())

            cy.get('#country').select(faker.number.int({min: 0, max: 160}))

            cy.get('#phone').type(faker.number.int({min:10 , max: 12}))  // faker.phone is not a function

            cy.get('#email').type(email)

            cy.get('#password').type(password)

            cy.get('[data-test="register-submit"]').click()

        })
        // Verify the Login is successful

        cy.get('h3').should('be.visible').and('have.text', 'Login')

    });

    it.only('Verify that the Change Password function works on the Profile page.', () => {

        cy.visit('https://practicesoftwaretesting.com/');

         // Click on Sign In option 
         cy.get('[data-test="nav-sign-in"]').click()

         // Send registered email address
          cy.readFile('files/email.txt').then((email)=> {
                 cy.get('#email').type(email) 
          })
 
 
         // Send registered password address
          cy.readFile('files/password.txt').then((password)=> {
                 cy.get('#password').type(password) 
          })
 
          // Click on Login button 
          cy.get('[data-test="login-submit"]').click()
 
          // Verify Login is successful
 
         cy.get('[data-test="page-title"]').should('be.visible').and('have.text', 'My account')
        
            // Click on Profile link
         cy.get('[data-test="nav-menu"]')
         .invoke('text')   // get the text of the element
         .then((text) => {
           const name = text.trim(); // remove extra spaces
       
           cy.get('[data-test="nav-my-profile"]').click({force: true}); // click on profile link
       
       //     cy.get('.row.mb-3') // get the element that contains the name
       //       .should('be.visible') // check if the element is visible
       //       .and('include.text', name); // check if the element contains the name
         });
       
         
         
    });


    it('Verify that warning messages appear when required fields are left empty.', () => {


        cy.visit('https://practicesoftwaretesting.com/');

        // Click on Sign In option 
        cy.get('[data-test="nav-sign-in"]').click()

        // Send registered email address
         cy.readFile('files/email.txt').then((email)=> {
                cy.get('#email').type(email) 
         })


        // Send registered password address
         cy.readFile('files/password.txt').then((password)=> {
                cy.get('#password').type(password) 
         })

         // Click on Login button 
         cy.get('[data-test="login-submit"]').click()

         // Verify Login is successful

        cy.get('[data-test="page-title"]').should('be.visible').and('have.text', 'Login')
       // Click on Contact link
        cy.get('[data-test="nav-contact"]').click();
        //click on Submit button without entering any data
        cy.get('[data-test="contact-submit"]').click()
        // Verify the messages warning is appearing 
        cy.get('[data-test="subject-error"]').should('be.visible').and('have.text', 'Subject is required')
        cy.get('[data-test="message-error"]').should('be.visible').and('have.text', 'Message is required')


    })


it('Verify that messages with fewer than 50 characters cannot be sent.', () => {
    cy.visit('https://practicesoftwaretesting.com/');

    // Click on Sign In option 
    cy.get('[data-test="nav-sign-in"]').click()

    // Send registered email address
     cy.readFile('files/email.txt').then((email)=> {
            cy.get('#email').type(email) 
     })


    // Send registered password address
     cy.readFile('files/password.txt').then((password)=> {
            cy.get('#password').type(password) 
     })

     // Click on Login button 
     cy.get('[data-test="login-submit"]').click()
// Verify Login is successful

cy.get('[data-test="page-title"]').should('be.visible').and('have.text', 'Login')
// Click on Contact link
 cy.get('[data-test="nav-contact"]').click();

 cy.get('[data-test="subject"]').select('Customer service') // select a subject from the dropdown
 cy.get('[data-test="message"]').type(faker.lorem.word(5)) // generate a random paragraph with 1 sentence
 cy.get('[data-test="contact-submit"]').click() // click on Submit button

 cy.get('[data-test="message-error"]').should('be.visible').and('have.text', 'Message must be minimal 50 characters') // verify the error message

 //cy.get('.alert').should('be.visible').and('have.text', 'Thanks for your message! We will contact you shortly.') // verify the success message
})



it('Verify that messages with more than 250 characters cannot be sent.', () => {

    cy.visit('https://practicesoftwaretesting.com/');

    // Click on Sign In option 
    cy.get('[data-test="nav-sign-in"]').click()

    // Send registered email address
     cy.readFile('files/email.txt').then((email)=> {
            cy.get('#email').type(email) 
     })


    // Send registered password address
     cy.readFile('files/password.txt').then((password)=> {
            cy.get('#password').type(password) 
     })

     // Click on Login button 
     cy.get('[data-test="login-submit"]').click()
// Verify Login is successful

cy.get('[data-test="page-title"]').should('be.visible').and('have.text', 'Login')
// Click on Contact link
 cy.get('[data-test="nav-contact"]').click();

 cy.get('[data-test="subject"]').select('Customer service') // select a subject from the dropdown
 cy.get('[data-test="message"]').type(faker.lorem.words(50)) // generate a random paragraph with 1 sentence
 cy.get('[data-test="contact-submit"]').click() // click on Submit button



 

 cy.get('.alert').should('be.visible').and('have.text', 'The message field must not be greater than 250 characters.') // verify the error message


})



it('Verify the message displayed on the page after submitting the filled form.', () => {

    cy.visit('https://practicesoftwaretesting.com/');

    // Click on Sign In option 
    cy.get('[data-test="nav-sign-in"]').click()

    // Send registered email address
     cy.readFile('files/email.txt').then((email)=> {
            cy.get('#email').type(email) 
     })


    // Send registered password address
     cy.readFile('files/password.txt').then((password)=> {
            cy.get('#password').type(password) 
     })

     // Click on Login button 
     cy.get('[data-test="login-submit"]').click()
// Verify Login is successful

cy.get('[data-test="page-title"]').should('be.visible').and('have.text', 'Login')
// Click on Contact link
 cy.get('[data-test="nav-contact"]').click();

 cy.get('[data-test="subject"]').select('Customer service') // select a subject from the dropdown
 cy.get('[data-test="message"]').type(faker.lorem.words(20)) // generate a random paragraph with 1 sentence
 cy.get('[data-test="contact-submit"]').click() // click on Submit button

 cy.get('.alert').should('be.visible').and('have.text', ' Thanks for your message! We will contact you shortly. ') // verify the success message

 cy.get('[data-test="nav-menu"]').click() // click on Profile link

 cy.get('[data-test="nav-my-messages"]').click() // click on My messages link

 cy.get('tbody > :nth-child(1) > :nth-child(1)')
 .should('be.visible') // Check visibility first (on the DOM element)
 .invoke('text')       // Now get the text
 .should('equal', 'customer-service'); // Assert the text




})


it('Verify the message displayed on the page after submitting the filled form. v2', () => {

    let message = faker.lorem.words(20);

    cy.writeFile('files/message.txt', message)

    cy.visit('https://practicesoftwaretesting.com/');

    // Click on Sign In option 
    cy.get('[data-test="nav-sign-in"]').click()

    // Send registered email address
     cy.readFile('files/email.txt').then((email)=> {
            cy.get('#email').type(email) 
     })


    // Send registered password address
     cy.readFile('files/password.txt').then((password)=> {
            cy.get('#password').type(password) 
     })

     // Click on Login button 
     cy.get('[data-test="login-submit"]').click()
// Verify Login is successful

cy.get('[data-test="page-title"]').should('be.visible').and('have.text', 'Login')
// Click on Contact link
 cy.get('[data-test="nav-contact"]').click();

 cy.get('[data-test="subject"]').select('Customer service') // select a subject from the dropdown
 cy.get('[data-test="message"]').type(message) // generate a random paragraph with 1 sentence
 cy.get('[data-test="contact-submit"]').click() // click on Submit button

 cy.get('.alert').should('be.visible').and('have.text', ' Thanks for your message! We will contact you shortly. ') // verify the success message

 cy.get('[data-test="nav-menu"]').click() // click on Profile link

 cy.get('[data-test="nav-my-messages"]').click() // click on My messages link


 cy.get('tbody > :nth-child(1) > :nth-child(1)')
 .should('be.visible') // Check visibility first (on the DOM element)
 .invoke('text')       // Now get the text
 .should('equal', 'customer-service'); // Assert the text

 cy.get(':nth-child(1) > [style="white-space: nowrap;"] > .btn').click() // click on the message link

 cy.get('.bg-secondary > .card-body').should('be.visible').and('have.text',message) // Check visibility first (on the DOM element)
 

 

})
});