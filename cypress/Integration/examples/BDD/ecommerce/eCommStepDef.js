///<reference types="Cypress" />
import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import { name } from "ejs"
import HomePage from "../../../pageObcects/HomePage"
import ProductPage from "../../../pageObcects/ProductPage"
const homePage=new HomePage()
const productPage=new ProductPage()
const name=new name()



Given('I open EComerce Page', function()
{

    cy.visit(Cypress.env('url')+"/angularpractice")
})
//When i add items to Cart
When('I add items to Cart', function()
{
    homePage.getShopTab().click()

this.data.productName.forEach(function(element) 
{
    cy.selectProduct(element)

});
productPage.checkOutButton().click()
})

//And Validate the total price
 When('And Validate the total price',()=>
 {
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
        cy.log($el.text())
    })

    cy.get('.text-right > h3:nth-child(1) > strong:nth-child(1)').each(($el, index, $list)=>{
        cy.log($el.text())
    })
 })

 //Then select the country submit and verify Thankyou
 Then('select the country submit and verify Thankyou',()=>
 {
    cy.contains('Checkout').click()
        cy.get('#country').type('Bulgaria')
        Cypress.config('defaultCommandTimeout', 8000)
        //cy.get('.suggestion > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true

        })
 })

 //I fill the form details
 When('I fill the form details',function(dataTable)
 {

    name = dataTable.rawTable[1][0]
    homePage.getEditbox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])

 })
 //Then Validate the forms behaviour
 Then('Validate the forms behaviour',function()
 {
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditbox().should('have.attr', 'minlength', '2')
    homePage.getEntreprenaur().should('be.disabled')
    Cypress.getShopTab().click()

 })
//And Select the Shop Page
 And('Select the Shop Page',function()
 {
    homePage.getShopTab().click()

 })