describe('Action Commands', () => {
    it('Use of select() method', () => {

        cy.visit('https://www.letskodeit.com/practice');

        // Select by text
        cy.get('#carselect').select('Honda');

        // Select by value
        cy.get('#carselect').select('benz', {timeout:1000});

        // Select by index
        cy.get('#carselect').select(0, {timeout:1000});
        cy.wait(2000)
        
        // Verify if the option is selected
        cy.get('#carselect option:selected').should('have.text', 'BMW')



        // Multiple Select Example

        // Select single option
        cy.get('#multiple-select-example').select('Peach');
        cy.get('#multiple-select-example').select('apple');
        cy.get('#multiple-select-example').select(1);
        cy.wait(2000)

        // Verify if the option is selected
        cy.get('#multiple-select-example option:selected').should('have.text','Orange')

        //OR
        cy.wait(2000)
        cy.get('#multiple-select-example').select('apple').should('contain.text','Apple')
        cy.wait(2000)
        // Select multiple options
        cy.get('#multiple-select-example').select(['apple', 'peach']);
        cy.wait(2000)
        cy.get('#multiple-select-example').select(['Apple', 'Orange']);
        cy.wait(2000)
        cy.get('#multiple-select-example').select([1, 2]);

    });
});