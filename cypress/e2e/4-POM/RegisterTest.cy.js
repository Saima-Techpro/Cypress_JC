const { faker } = require("@faker-js/faker");
const { login } = require("../../support/pages/login_page");
const { register } = require("../../support/pages/register_page");

describe('Register Test Suite', () => {
    // Class level variables to store the data coming from fixture files 
    let registerData
    let loginData
    let fakeMail


    before(() => {
        // Using fixture() to read the data files stored in fixtures folder
        cy.fixture('register_data').then((data)=> {
            registerData = data
        })

        cy.fixture('login_data').then((data)=>{
            loginData = data
        })

        fakeMail = faker.internet.email()


    })




    it('TC-01: Verify that registration can be completed with valid data.', () => {

        cy.visit('https://practicesoftwaretesting.com/auth/register');

        register.writeFirstName(registerData.firstName)
        register.writeLastName(registerData.lastName)
        register.writeDateOfBirth(registerData.dateOfBirth)
        register.writeStreet(registerData.street)
        register.writeCity(registerData.city)
        register.writepostalCode(registerData.postCode)
        register.writeState(registerData.state)
        register.writeCountry(registerData.country)
        register.writePhone(registerData.phone)
        register.writeEmail(fakeMail)
        register.writePassword(registerData.password)
        register.clickRegister()
        login.verifyPageTitle(loginData.pageTitle) // Test passed 
        
    });


     it('TC-02: Verify that a password with fewer than 6 characters cannot be used.', () => {

        cy.visit('https://practicesoftwaretesting.com/auth/register');

        register.writeFirstName(registerData.firstName)
        register.writeLastName(registerData.lastName)
        register.writeDateOfBirth(registerData.dateOfBirth)
        register.writeStreet(registerData.street)
        register.writeCity(registerData.city)
        register.writepostalCode(registerData.postCode)
        register.writeState(registerData.state)
        register.writeCountry(registerData.country)
        register.writePhone(registerData.phone)
        register.writeEmail(faker.internet.email())
        register.writePassword(registerData.passwordWith5Chars)
        register.clickRegister()
        register.verifypasswordMinLengthErrorMessage(registerData.passwordMinLengthErrorMessage) // Test passed => error message is visible 
        
    });



     it('TC-03: Verify that registration cannot be completed using an already registered email address.', () => {

        cy.visit('https://practicesoftwaretesting.com/auth/register');

        register.writeFirstName(registerData.firstName)
        register.writeLastName(registerData.lastName)
        register.writeDateOfBirth(registerData.dateOfBirth)
        register.writeStreet(registerData.street)
        register.writeCity(registerData.city)
        register.writepostalCode(registerData.postCode)
        register.writeState(registerData.state)
        register.writeCountry(registerData.country)
        register.writePhone(registerData.phone)
        register.writeEmail(fakeMail)
        register.writePassword(registerData.password)
        register.clickRegister()
        register.verifyEmailAlreadyExistErrorMessage(registerData.emailAlreadyExistErrorMessage) // Test passed => error message is visible 
        
    });

      it('TC-04: Verify that warning messages appear when required fields are left empty.', () => {

        cy.visit('https://practicesoftwaretesting.com/auth/register');

        register.writeEmail(registerData.email) // sending already registered email
        register.writePassword(registerData.password) // sending already registered password
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