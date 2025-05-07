describe('Action Commands', () => {
    it('Use of type() and clear() methods ', () => {
        
        cy.visit('https://www.letskodeit.com/practice')

        // Type a text and clear it 
        cy.get('#enabled-example-input').type('TechPro Education').clear()

        // Now disable the text button 
        cy.get('#disabled-button').click()

        // Now try to type the text again 
        //cy.get('#enabled-example-input').type('TechPro Education')// error => because this input field is disabled 



        // NOTE: Using options in type() function 
        cy.get('#enabled-example-input').type('TechPro', {force:true})
        cy.wait(2000)

        cy.get('#disabled-button').should('be.enabled')
        cy.wait(2000)
        cy.get('#enabled-example-input').clear({force: true})

        cy.wait(2000)

        cy.get('#enabled-button').click()

        // cy.get('#enabled-example-input').type('Cypress{backspace}', {delay:1000}) => removes one character 

         cy.get('#enabled-example-input').type('Cypress{backspace}{backspace}', {delay:1000}) // => removes two characters

        cy.get('#enabled-example-input').type('Cypress{selectAll}{backspace}', {delay:1000}) // removes all characters



    });


    it('Action Commands', () => {
        cy.visit('https://www.amazon.com/');

        // Options in type() function {enter}
        cy.get('#twotabsearchtextbox').type('iPhone 16 {enter}')
       
        cy.url().should('contain', 'iPhone')
        
        cy.contains('iPhone 16')
        
    });
});