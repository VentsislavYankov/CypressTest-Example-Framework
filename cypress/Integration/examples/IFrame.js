///<reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function(){
    it('Demo example', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#couses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()        

    })

})