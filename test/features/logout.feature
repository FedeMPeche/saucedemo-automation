Feature: Logout User

Scenario: UC-7 User logs out successfully
Given I open login page
When I login with "standard_user" and "secret_sauce"
And I logout
Then I should see login button