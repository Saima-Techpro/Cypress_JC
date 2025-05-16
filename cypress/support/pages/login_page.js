class LoginPage{
/*
Every Page class should have following: 
 1. Webelements (inside the constructor)
 2. Methods
 3. export
*/

// Webelements
 constructor(){
    this.pageTitle = 'h3'
    this.emailInput = '[data-test="email"]'
    this.passwordInut = '[data-test="password"]'
    this.loginButton = '[data-test="login-submit"]'
    this.invalidLoginMessage = '.help-block'

 }
// Methods
verifyPageTitle(pageTitle){
    cy.get(this.pageTitle).should('have.text', pageTitle)
}

writeEmail(email){
    cy.get(this.emailInput).type(email)

}

writePassword(password){
    cy.get(this.passwordInut).type(password)
}

clickLoginButton(){
    cy.get(this.loginButton).click()
}

verifyInvalidEmailPasswordMessage(message){
    cy.get(this.invalidLoginMessage).should('have.text', message)

}



}
export const login = new LoginPage()