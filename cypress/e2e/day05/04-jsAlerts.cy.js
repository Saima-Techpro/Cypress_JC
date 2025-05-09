describe('Alerts', () => {
    it('How to validate alert messages', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        // Trigger the alert
        cy.get('[onclick="jsAlert()"]').click()

        // Validate the alert message
        cy.on('window:alert', (message)=> {
            expect(message).to.equal('I am a JS Alert')
        })
        
    });

    it.only('Press cancel on the alert messages', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        // Trigger the alert
        cy.get('[onclick="jsConfirm()"]').click()
        // Cance the alert message
        cy.on('window:confirm', (message)=> { // for this type of alert, message is optional 
            expect(message).to.equal('I am a JS Confirm')
            return false; // false presesses the cancel button automatically
        })
        cy.get('[id="result"]').should('exist').and('be.visible').and('contain', 'You clicked: Cancel')
        
    });

    it('Press ok on the alert messages', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        // Trigger the alert
        cy.get('[onclick="jsConfirm()"]').click()
        // Accept the alert message
        cy.on('window:confirm', ()=> {
            return true; // true presesses the Ok button automatically
        })
        cy.get('[id="result"]').should('exist').and('be.visible').and('contain', 'You clicked: Ok')
        
    });




    it.only('Enter text in the alert prompt', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        // Trigger the alert
        //cy.get('[onclick="jsPrompt()"]').click()
        // In Cypress, we don't have the option to type anything in the alert prompt field
        // We have override this prompt

        cy.window().then((alertWindow) => {
          
            cy.get('[onclick="jsPrompt()"]').click()

            cy.stub(alertWindow, 'prompt').returns('cypress')

        })
      
        // This code =>  cy.stub(alertWindow, 'prompt').returns('text') writes the text in the prompt field

        // stub() is used to create a fake function 


        cy.get('[id="result"]').should('exist').and('be.visible').and('contain', 'cypress')
        
    });










});