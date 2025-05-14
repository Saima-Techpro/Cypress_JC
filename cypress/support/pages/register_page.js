
class RegisterPage {
    /*
    Every Page class should have following: 
    1. Webelements (inside the constructor)
    2. Methods
    3. export
    */


    // Webelements
    constructor(){
        this.firstNameInput = '#first_name'
        this.lastNameInput = '#last_name'
        this.dateOfBirthInput = '#dob'
        this.postalCodeInput = '#postal_code'
        this.streetInput = '#street'
        this.cityInput = '#city'
        this.stateInput = '#state'
        this.countryInput = '#country'
        this.phoneInput = '#phone'
        this.emailInput = '#email'
        this.passwordInput = '#password'
        this.registerButton = '[type="submit"]'
        this.passwordMinLengthErrorMessage = '[data-test="password-error"]'
        this.emailAlreadyExistErrorMessage = '.help-block'
        this.firstNameRequiredMessage = '[data-test="first-name-error"]'
        this.lastNameRequiredMessage = '[data-test="last-name-error"]'
        this.dateOfBirthRequiredMessage = '[data-test="dob-error"]'
        this.streetRequiredMessage = '[data-test="street-error"]'
        this.postalCodeRequiredMessage = '[data-test="postal_code-error"]'
        this.cityRequiredMessage = '[data-test="city-error"]'
        this.stateRequiredMessage = '[data-test="state-error"]'
        this.phoneRequiredMessage = '[data-test="phone-error"]'
    
    }


    // Methods
    writeFirstName(firstName){
        cy.get(this.firstNameInput).type(firstName)
    }

    writeLastName(lastName){
        cy.get(this.lastNameInput).type(lastName)
    }
    writeDateOfBirth(dateOfBirth){
        cy.get(this.dateOfBirthInput).type(dateOfBirth)
    }

     writepostalCode(postalCode){
        cy.get(this.postalCodeInput).type(postalCode)
    }
     
     writeStreet(street){
        cy.get(this.streetInput).type(street)
    }

     writeCity(city){
        cy.get(this.cityInput).type(city)
    }

      writeState(state){
        cy.get(this.stateInput).type(state)
    }


     writeCountry(country){
        cy.get(this.countryInput).select(country)
    }
     writePhone(phone){
        cy.get(this.phoneInput).type(phone)
    }


      writeEmail(email){
        cy.get(this.emailInput).type(email)
    }


      writePassword(password){
        cy.get(this.passwordInput).type(password)
    }

      clickRegister(){
        cy.get(this.registerButton).click()
    }

    verifypasswordMinLengthErrorMessage(errorMessage){
        cy.get(this.passwordMinLengthErrorMessage).should('contain', errorMessage)
    }

    verifyEmailAlreadyExistErrorMessage(errorMessage){
        cy.get(this.emailAlreadyExistErrorMessage).should('contain', errorMessage)
    }


    verifyFirstNameRequiredMessage(errorMessage){
        cy.get(this.firstNameRequiredMessage).should('contain', errorMessage)
    }
     verifyLastNameRequiredMessage(errorMessage){
        cy.get(this.lastNameRequiredMessage).should('contain', errorMessage)
    }

     verifyDateOfBirthRequiredMessage(errorMessage){
        cy.get(this.dateOfBirthRequiredMessage).should('contain', errorMessage)
    }

     verifyStreetRequiredMessage(errorMessage){
        cy.get(this.streetRequiredMessage).should('contain', errorMessage)
    }


    verifyPostalCodeRequiredMessage(errorMessage){
        cy.get(this.postalCodeRequiredMessage).should('contain', errorMessage)
    }

     verifyCityRequiredMessage(errorMessage){
        cy.get(this.cityRequiredMessage).should('contain', errorMessage)
    }

     verifyStateRequiredMessage(errorMessage){
        cy.get(this.stateRequiredMessage).should('contain', errorMessage)
    }

     verifyPhoneRequiredMessage(errorMessage){
        cy.get(this.phoneRequiredMessage).should('contain', errorMessage)
    }



}

export const register = new RegisterPage()



