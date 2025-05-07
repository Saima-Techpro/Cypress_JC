describe('Action Commands', () => {
    it('Use of click() method and options', () => {


        cy.visit('https://www.letskodeit.com/practice');

        //cy.get('#opentab').click();

        // cy.get('#opentab').click('left');
        //cy.get('#opentab').click('bottom');

        // NOTE: we can click at different position of the element 
        // cy.get('#opentab').click('topLeft'); 

        // cy.get('#opentab').click(10, 10); 

        // cy.get('#opentab').click(-10, -10, {force:true}); 

        //cy.get('#opentab').click(-10, -10, {log:true}); // log can be seen on the console within th etest runner => go to inpect => click on console => read the log 

        //cy.get('[type="checkbox"][name="cars"]').click({multiple:true}); // works for checkbox because checkbox allows multiple selections

        cy.get('[type="radio"][name="cars"]').click({multiple:true}); // this will work as well but only one last option will remain selected 

        // If you want to choose one specific option 
        cy.get('[type="radio"][value="benz"]').click();


       // Scroll the page to bring the element to a desired position before clicking
        cy.get('#mousehover').click({scrollBehavior: 'center'});

        // Hover over is a real event which needs a plugin 
        // but for now, we can use click() and click({ force: true }) to see the dropdown values
        cy.get('#mousehover').click();
        cy.contains('Top').click({ force: true }); 



        
    });
});