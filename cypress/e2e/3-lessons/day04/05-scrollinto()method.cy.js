describe('Action Commands', () => {
    it('Use of scrollTo() method', () => {

        cy.visit('https://www.webdriveruniversity.com/');

        // Scroll using coordinates
        //cy.scrollTo(0,4000)

         // Scroll using coordinates with options
        cy.scrollTo(0,4000, {duration: 3000})

        // Scroll using position

        cy.scrollTo('top' , {duration: 3000})

        cy.scrollTo('center' , {duration: 3000})



    });

    it('Use of scrollIntoView() method', ()=>{
        cy.visit('https://www.webdriveruniversity.com/');

        // Fast Scroll 
        cy.get('#actions').scrollIntoView()

        // Slow Scroll
        cy.get('#contact-us').scrollIntoView({duration: 3000})


    })
});