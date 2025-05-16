const { dashboardPage } = require("../../support/pages/dashboard_page");
const { login } = require("../../support/pages/login_page");

describe('Admin Login Tests', () => {

    let loginData

    before(()=>{
        cy.fixture('login_data').then((data) => {
            loginData = data
        })

    })

    beforeEach(()=>{
         cy.visit('/' + Cypress.env('login'));
    })

    it('TC01- Positive Test - Verify that login is successful with valid credentials.', () => {

        login.writeEmail(loginData.validAdminEmail)  
        login.writePassword(loginData.validAdminPassword)
        login.clickLoginButton()      
        dashboardPage.verifyUrl()

    });

       it('TC02- Negative Test - Verify that login is not successful with invalid email.', () => {

        login.writeEmail(loginData.invalidAdminEmail)  
        login.writePassword(loginData.validAdminPassword)
        login.clickLoginButton()    
        cy.wait(1000)  
        login.verifyInvalidEmailPasswordMessage(loginData.invalidEmailPasswordMessage)

    });


       it('TC03- Negative Test - Verify that login is not successful with invalid password.', () => {

        login.writeEmail(loginData.validAdminEmail)  
        login.writePassword(loginData.invalidAdminPassword)
        login.clickLoginButton()  
        cy.wait(1000)    
        login.verifyInvalidEmailPasswordMessage(loginData.invalidEmailPasswordMessage)

    });


       it('TC04- Negative Test - Verify that login is not successful with invalid credentials.', () => {

        login.writeEmail(loginData.invalidAdminEmail)  
        login.writePassword(loginData.invalidAdminPassword)
        login.clickLoginButton()     
        cy.wait(1000) 
        login.verifyInvalidEmailPasswordMessage(loginData.invalidEmailPasswordMessage)

    });
});