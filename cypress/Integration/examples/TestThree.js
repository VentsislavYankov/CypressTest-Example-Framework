
describe('My  Third Test Suite', function() {
    it('My ThirdTest case', function() {

        cy.visit(Cypress.env('url')+"/AutomationPractice/")

        //Check boxes
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert
        cy.on('window:alert',(str)=>{
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        /* 
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert',(str)=>{
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        */
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'rahulshettyacademy')

        cy.go('back')

        
      
    })
})
