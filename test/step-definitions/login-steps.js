const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pages/login.page');
const { expect } = require('@wdio/globals');
const inventoryPage = require('../pages/inventory.page');

Given('I open login page', async () => {
  console.log("Opening login page");
  await loginPage.open();
});

When('I type username {string} and password {string}', async (u,p) => {
  await loginPage.username.setValue(u);
  await loginPage.password.setValue(p);
});

When('I clear inputs', async () => {
  await loginPage.username.clearValue();
  await loginPage.password.clearValue();

  await expect(loginPage.username).toHaveValue('');
  await expect(loginPage.password).toHaveValue('');
});

When('I clear password', async () => {
  await loginPage.password.clearValue();
  await expect(loginPage.password).toHaveValue('');
});

When('I click login', async () => {
  await loginPage.loginBtn.click();
});

When('I login with {string} and {string}', async (u,p) => {
  await loginPage.login(u,p);
  await inventoryPage.title.waitForDisplayed();
});

Then('I should see error {string}', async (msg) => {
  await loginPage.error.waitForDisplayed();
  await expect(loginPage.error).toHaveText(expect.stringContaining(msg));
});

Then('I should see dashboard title', async () => {
  await loginPage.title.waitForDisplayed();
  await expect(loginPage.title).toHaveText("Swag Labs");
});

When('I logout', async () => {
  await inventoryPage.logout();
});

Then('I should see login button', async () => {
  await expect(loginPage.loginBtn).toBeDisplayed();
});