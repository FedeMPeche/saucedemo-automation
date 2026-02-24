Feature: Login functionality

Scenario: UC-1 Empty credentials
Given I open login page
When I click login
Then I should see error "Username is required"

Examples:
| user | pass |
| test | test |

Scenario: UC-2 Missing password
Given I open login page
When I type username "test" and password ""
And I click login
Then I should see error "Password is required"

Examples:
| user | pass |
| test | test |

Scenario: UC-3 Valid login
Given I open login page
When I login with "<user>" and "<pass>"
Then I should see dashboard title

Examples:
| user | pass |
| standard_user | secret_sauce |
| problem_user | secret_sauce |