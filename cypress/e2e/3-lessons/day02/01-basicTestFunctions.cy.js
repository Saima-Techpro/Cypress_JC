/// <reference types = "cypress"/>

describe('Basic Test Functions', ()=>{
   
    it.only('Use of basic functions like visit(), click(), type()', ()=>{

       
        cy.visit('url')
        // visit() function allows to visit the given url 

        cy.get('locator').click()

    // cy.get() function works with the locators 
    // cy.get() function can be used to locate single element or multiple elements
    // xpath is not supported by default in Cypress framework but we can add use after some configuration 
    // click() is used to click on a specific element

    // OR

    cy.get('locator').should('be.visible').click()

    cy.contains('check if the given text/word exists').click()
    // example
    cy.contains('Register').click()

    /*
.contains(content)
.contains(content, options)
.contains(selector, content)
.contains(selector, content, options)

// ---or---

cy.contains(content)
cy.contains(content, options)
cy.contains(selector, content)
cy.contains(selector, content, options)
    */


    cy.get('locator').type('text').should('assertion', 'expected text')




    })

    it.skip('Use of basic functions like visit(), click(), type()', ()=>{


    })


  



})

