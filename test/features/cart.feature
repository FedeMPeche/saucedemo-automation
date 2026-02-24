Feature: Cart functionality

Scenario: UC-4 Add product to cart after login
Given I open login page
When I login with "standard_user" and "secret_sauce"
And I add product "Sauce Labs Backpack" to cart
Then cart badge should show "1"
And cart should contain "Sauce Labs Backpack"

Scenario Outline: UC-5 Add multiple products to cart
Given I open login page
When I login with "standard_user" and "secret_sauce"
And I add product "<product>" to cart
Then cart badge should show "<count>"

Examples:
| product | count |
| Sauce Labs Backpack | 1 |
| Sauce Labs Bike Light | 1 |