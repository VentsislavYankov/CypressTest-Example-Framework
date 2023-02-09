
describe('My SEcond Test Suite', function() {
    it('My SecondTest case', function() {

        cy.visit(Cypress.env('url')+"/AutomationPractice/")

        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])

        //static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2') 
        cy.get('#autocomplete').type('bul')
        cy.get('.ui-menu-item div').each(($el, index, $list) =>{
            if($el.text()==="Bulgaria")
            {
              $el.click()
            }
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value', 'Bulgaria')
        //visible-invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('[value="radio3"]').check().should('be.checked')
    })
})
