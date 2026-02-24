# SauceDemo Automation Framework

## Stack
- WebDriverIO
- Cucumber (BDD)
- Page Object Pattern
- Chrome + Edge
- Parallel execution

## Test Cases Covered
UC-1 → Empty credentials  
UC-2 → Missing password  
UC-3 → Valid login  
UC-4 → Add product to cart after login
UC-5 → Add multiple products to cart
UC-6 → User removes product from cart
UC-7 → User logs out successfully

## Design Decisions
- Page Object Pattern used for maintainability
- CSS selectors used for speed and stability
- Parallel execution enabled via maxInstances
- Data driven tests via Scenario Outline
- Logger implemented for traceability

## Run Tests

npm install
npx wdio run wdio.conf.js
