const { faker } = require("@faker-js/faker");
const { login } = require("../../support/pages/login_page");
const { register } = require("../../support/pages/register_page");

describe('Register Test Suite', () => {
    // Class level variables to store the data coming from fixture files 
    let registerData
    let loginData
    let fakeMail
    let fakeUser


    before(() => {
      fakeUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        dateOfBirth: ('1998-09-15'),
        street: faker.location.street(),
        postCode: faker.location.zipCode(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        phone: faker.number.int({min:10 , max: 12}),
        email:faker.internet.email(),
        password: faker.internet.password({length:8, memorable : true})+'3@!K'

      };

      cy.writeFile('cypress/fixtures/fakeUser.json', fakeUser);


      // Load the fixture files into the memory for test use 

    cy.fixture('fakeUser').then((data)=>{
        fakeUser = data
    })

    cy.fixture('login_data').then((data => {
        loginData = data 
    }))

    cy.fixture('register_data').then((data) => {
        registerData = data 
    })


    })

    // Use baseurl in beforeEach() hook to avoid repetition 
    beforeEach(()=>{
         cy.visit('/' + Cypress.env('register'));
    })




    it('TC-01: Verify that registration can be completed with valid data.', () => {
        register.writeFirstName(fakeUser.firstName)
        register.writeLastName(fakeUser.lastName)
        register.writeDateOfBirth(fakeUser.dateOfBirth)
        register.writeStreet(fakeUser.street)
        register.writeCity(fakeUser.city)
        register.writepostalCode(fakeUser.postCode)
        register.writeState(fakeUser.state)
        register.writeCountry(fakeUser.country)
        register.writePhone(fakeUser.phone)
        register.writeEmail(fakeUser.email)
        register.writePassword(fakeUser.password)
        register.clickRegister()
        login.verifyPageTitle(loginData.pageTitle) // Test passed 
        
    });


     it('TC-02: Verify that a password with fewer than 6 characters cannot be used.', () => {

        register.writeFirstName(fakeUser.firstName)
        register.writeLastName(fakeUser.lastName)
        register.writeDateOfBirth(fakeUser.dateOfBirth)
        register.writeStreet(fakeUser.street)
        register.writeCity(fakeUser.city)
        register.writepostalCode(fakeUser.postCode)
        register.writeState(fakeUser.state)
        register.writeCountry(fakeUser.country)
        register.writePhone(fakeUser.phone)
        register.writeEmail(fakeUser.email)
        register.writePassword(registerData.passwordWith5Chars)
        register.clickRegister()
        register.verifypasswordMinLengthErrorMessage(registerData.passwordMinLengthErrorMessage) // Test passed => error message is visible 
        
    });



     it('TC-03: Verify that registration cannot be completed using an already registered email address.', () => {


        register.writeFirstName(fakeUser.firstName)
        register.writeLastName(fakeUser.lastName)
        register.writeDateOfBirth(fakeUser.dateOfBirth)
        register.writeStreet(fakeUser.street)
        register.writeCity(fakeUser.city)
        register.writepostalCode(fakeUser.postCode)
        register.writeState(fakeUser.state)
        register.writeCountry(fakeUser.country)
        register.writePhone(fakeUser.phone)
        register.writeEmail(fakeUser.email)
        register.writePassword(registerData.password)
        register.clickRegister()
        register.verifyEmailAlreadyExistErrorMessage(registerData.emailAlreadyExistErrorMessage) // Test passed => error message is visible 
        
    });

      it('TC-04: Verify that warning messages appear when required fields are left empty.', () => {


        register.writeEmail(fakeUser.email) // sending already registered email
        register.writePassword(fakeUser.password) // sending already registered password
        register.clickRegister()
    
        // Verify all warning messages 

        register.verifyFirstNameRequiredMessage(registerData.firstNameRequiredMessage)
        register.verifyLastNameRequiredMessage(registerData.lastNameRequiredMessage)
        register.verifyDateOfBirthRequiredMessage(registerData.dateOfBirthRequiredMessage)
        register.verifyStreetRequiredMessage(registerData.streetRequiredMessage) 
        register.verifyPostalCodeRequiredMessage(registerData.postalCodeRequiredMessage) 
         register.verifyCityRequiredMessage(registerData.cityRequiredMessage) 
         register.verifyStateRequiredMessage(registerData.stateRequiredMessage) 
         register.verifyPhoneRequiredMessage(registerData.phoneRequiredMessage)
        
        
    });
});