
describe('My Fourth Test Suite', function() {
    it('My FourthTest case', function() {

        cy.visit(Cypress.env('url')+"/AutomationPractice/")

        //Table
        cy.get('.table-display > tbody:nth-child(1) > tr:nth-child(9) > td:nth-child(2)').each(($el, index, $list) =>{

            const text=$el.text()
            if(text.includes('Python'))
            {
             cy.get('.table-display > tbody:nth-child(1) > tr:nth-child(9) > td:nth-child(2)').eq(index).next().then(function(price)
             {
                const priceText = price.text()
                expect(priceText).to.equal('25')
             })
            }
           
        })

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
        
      
    })
})
