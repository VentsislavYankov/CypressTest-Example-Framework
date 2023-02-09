Feature: End to end Ecomerce validation

  application Regression
@Regression
 Scenario: Ecommers product delivery
 Given I open EComerce Page
 When I add items to Cart
 And Validate the total prices
 Then select the country submit and verify Thankyou

@Smoke
 Scenario: Populate the form to shop
 Given I open EComerce Page
 When I fill the form details
   |name | gender |
   |Bo   | Male   |
 Then Validate the forms behaviour
 And Select the Shop Page


  