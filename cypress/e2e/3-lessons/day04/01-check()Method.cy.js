describe('Action Commands', () => {
    it('Use of check() method', () => {

        cy.visit('https://www.letskodeit.com/practice');

        // Check all boxes
        //cy.get('[type="checkbox"][name="cars"]').check()

        // Check all boxes and verify that they're checked
        cy.get('[type="checkbox"][name="cars"]').check().should('be.checked')

        // UnCheck all boxes and verify that they're unchecked
        cy.get('[type="checkbox"][name="cars"]').uncheck().should('not.be.checked')

        // Check the first box
        cy.get('[type="checkbox"][name="cars"]').first().check()

        cy.get('[type="checkbox"][name="cars"]').last().check()

        // Check any box by value
        cy.get('[type="checkbox"][name="cars"]').check('benz')

         // UnCheck multiple boxes by value
         cy.get('[type="checkbox"][name="cars"]').uncheck(['benz','bmw', 'honda'])

          // Check multiple boxes by value
        cy.get('[type="checkbox"][name="cars"]').check(['benz', 'bmw'], {timeout:1000})
        

        // RADIO BUTTONS
        cy.get('[type="radio"][name="cars"]').check()

        cy.get('[type="radio"][name="cars"]').check('bmw')

    });
});