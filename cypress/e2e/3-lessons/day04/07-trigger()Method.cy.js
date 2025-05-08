describe('Action Methods', () => {
    // it('Use of trigger() Method', () => {

    //     cy.visit('https://www.letskodeit.com/practice');

    //     cy.get('#mousehover').trigger('mousemove')

    //     cy.get('[href="#top"]').click({force:true})
        
    // });


    it('Use of trigger() Method on Amazon', () => {

        cy.visit('https://www.amazon.com');

        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.wait(1000)
        
        cy.xpath('//span[text()="Account"]').click({force:true})
        cy.url().should('contain', 'Account')


    });
});