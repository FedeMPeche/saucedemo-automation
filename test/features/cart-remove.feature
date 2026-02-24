Feature: Remove product from cart

Scenario: UC-6 User removes product from cart
Given I open login page
When I login with "standard_user" and "secret_sauce"
And I add product "Sauce Labs Backpack" to cart
And I remove product "Sauce Labs Backpack" from cart
Then cart badge should not be visible