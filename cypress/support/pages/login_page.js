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

 }
// Methods
verifyPageTitle(pageTitle){
    cy.get(this.pageTitle).should('have.text', pageTitle)
}



}
export const login = new LoginPage()