
///<reference types='cypress' />

describe('My First Test', ()=> {


it('First Test', ()=> {
    expect(true).to.equal(true)
    
    // This is the body of thetest method where the test steps go

    // 1. User goes  to the URL
    // 2. User clicks on Login Button 
    // 3. User enter userName 
    // etc.... 
})

it.skip('Second Test ', ()=>{
    // intelliSense 
    // Add following extensions:
    // 1. cypress snippets by Cliff Su
    // Write cygt and press enter => it will create the syntax cy.get('') automatically 

    // 2. ES6 Mocha snippets

    // 3. add only 

    // 4. hide comments => hide/show comments option becomes available

    // 5. Rainbow brackets => just makes the syntax colourful 
})

})

/*
NOTES: 
it() block is used to create individual test methods 
describe() block is used to group multiple tests methods
*/



