describe('My Postman Test Suite', function() 
{
 
it('My APITest case',function() {

    cy.request('POST', 'https://test-xml-service.studentfees.com/FXconversion', 
    {
        "username_loginto" :"qa-vyankov",
        "password_loginto" :"d$4Ot8h1B6#e&8&JR%F&O",
        "bank_account_id":"USD",
        "country_pay_from":"AR" ,
        "payment_amount":"50"
    }).then(function(response)
{
expect(response.body).to.have.property("Msg", "successfully added")
expect(response.status).to.eq(200)
})
})
})   