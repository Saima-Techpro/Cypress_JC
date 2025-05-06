/*
Go to https://www.amazon.com/
Search for 'iphone' in the search engine 
Verify that the search term 'iphone' is being searched for in the search results page

*/
describe('Amazon Search Test', () => {
    it('Amazon Search Test', () => {

        cy.visit('https://www.amazon.com/')

        cy.get('#twotabsearchtextbox').type('iPhone 16 {enter}')

        //cy.get('#nav-search-submit-button').click()

        cy.get('.a-color-state').should('contain', 'iPhone')

        
    });
});

/*
Other keyboard commands are:
selectAll, moveToStart, moveToEnd, del, backspace, esc, enter, rightArrow, leftArrow, upArrow, downArrow, home, end, insert, pageUp, pageDown, {, alt, option, ctrl, control, meta, command, cmd, shift

NOTE: tab?

*/