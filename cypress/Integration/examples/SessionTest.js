///<reference types="Cypress" />

const { text } = require("express")
const { default: neatCsv } = require("neat-csv")
let productName

describe('JWT Session', ()=>{
    it('is logged in trough local storage', ()=>{

        cy.LoginAPI().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body b").eq(1).then(function(ele)
        {
            productName= ele.text();
        })

        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("Bul")
        cy.get(".ta-results button").each(($el,index,$list)=>
        {
            if($el.text === "Bulgaria")
            {
                cy.wrap($el).click()
            }
        })
        cy.get(".action_submit").click();
        cy.wait(2000)
        cy.get(".order-summary button").click()

        
        cy.readFile(Cypress.config("fileServerFolder")+"\cypress\downloads")
        ,then(async function(text)
        {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductCSV = csv[0] ["ProductName"]
            expect(productName).to.equal(actualProductCSV)
            
        })
        

    })
})