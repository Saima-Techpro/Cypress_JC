class Dashboard{
    /*
    Every Page class should have:
    1. Webelements inside the constructor 
    2. Methods
    3. export

    */

    // Webelements
    constructor(){

    }

    // Methods
    verifyUrl(){
        cy.url().should('contain', 'dashboard')
    }


}
export const dashboardPage = new Dashboard()