const { faker, fa } = require("@faker-js/faker");

describe('Tool Shop: Test Suite', () => {
    
   
    it('Verify that registration can be completed with valid data', () => {
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

        cy.get('h3').should('be.visible').and('have.text', 'Login').screenshot()

    });

    it('Verify that a password with fewer than 6 characters cannot be used.', () => {

         // Use writeFile() method to store the generated email and password as a file 

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

            cy.get('#email').type(faker.internet.email())

            cy.get('#password').type('12345')

            cy.get('[data-test="register-submit"]').click()

        })

        
        cy.get('[data-test="password-error"] > :nth-child(1)').should('be.visible').and('have.text', ' Password must be minimal 6 characters long. ').screenshot()

    });

     it('Verify that registration cannot be completed using an already registered email address.', () => {

         // Use writeFile() method to store the generated email and password as a file 

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

            // Option 1: You can send already used email if the email variable is created at describe block level
            // cy.get('#email').type(email) 

            // OPtion 2: Use readFile()

            cy.readFile('files/email.txt').then((email)=> {
                cy.get('#email').type(email) 
            })


            cy.get('#password').type(faker.internet.password() + '2!')

            cy.get('[data-test="register-submit"]').click()

        })

        // Verify the failure message
        
        cy.get('.help-block').should('be.visible').and('have.text','A customer with this email address already exists.' )

    });

    it('Verify that login is successful with valid credentials.', ()=>{

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

    })

    it('Verify the message shown on the Favorites page when no product is added.', ()=>{

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

        // Click on favorites 
        cy.get('[data-test="nav-favorites"]').click()

        // Verify the message 
        cy.get('.col > div').should('be.visible').and('contain', 'There are no favorites yet.')

    })

        it('Verify that the product appears on the Favorites page after being added.', ()=>{

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

        // Click on Home 
        cy.get('[data-test="nav-home"]').click()

        // Choose a product 
        cy.get('[data-test="product-01JV5CVX41VYTTXZRX0ZWZ8CWJ"]').click()

        // Click on Add to Favorites
       cy.get('#btn-add-to-favorites').click()

       // Verify the success message appears
       cy.get('.toast-message').should('be.visible')

       cy.wait(3000)


       // Click on the menu
       cy.get('#menu').click()

       // Click on my favorites from the menu 
       cy.get('[data-test="nav-my-favorites"]').click()

       // Verify the product is added
       cy.get('[data-test="product-name"]').should('be.visible').and('contain', 'Pliers')



    })


        it('Verify that the Update Profile function works on the Profile page.', ()=>{

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

       cy.wait(1000)


       // Click on the menu
       cy.get('#menu').click()
       cy.wait(1000)

       // Click on my profile from the menu 
       cy.get('[data-test="nav-my-profile"]').click()
       cy.wait(1000)

       // Update phone number
       cy.get('[data-test="phone"]').clear().type(faker.string.numeric({length: {min:9 , max:10}}))
       cy.wait(2000)

       // Click on Update profile button 
      
       cy.get('[data-test="update-profile-submit"]').click()
       cy.wait(1000)

        // Verify the update is successful
        cy.get('.alert > strong').should('be.visible').and('contain', 'successfully')




    })

     it('Verify that the Change Password function works on the Profile page.', ()=>{

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

       cy.wait(1000)


       // Click on the menu
       cy.get('#menu').click()
       cy.wait(1000)

       // Click on my profile from the menu 
       cy.get('[data-test="nav-my-profile"]').click()
       cy.wait(1000)

       // Update password

         cy.readFile('files/password.txt').then((password)=> {
                cy.get('[data-test="current-password"]').type(password) 
         })

         let newPass = faker.internet.password()+ '&6';
         cy.writeFile('files/newPassword.txt', newPass)
         // Send new password
         cy.readFile('files/newPassword.txt').then((newPassword)=>{
            cy.get('[data-test="new-password"]').type(newPassword);
         })

         // Confirm password 
          cy.readFile('files/newPassword.txt').then((newPassword)=>{
            cy.get('[data-test="new-password-confirm"]').type(newPassword);
         })

         // Submit 
         cy.get('[data-test="change-password-submit"]').click()

          // Verify the password change is successful
        cy.get('.alert > strong').should('be.visible').and('have.text', 'successfully')


         

       




    })






});