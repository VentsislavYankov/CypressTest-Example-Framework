
describe('My Five Test Suite', function() {
    it('My FiveTest case', function() {

        cy.visit(Cypress.env('url')+"/AutomationPractice/")

        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)

        })

        
      
    })
})
