const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const inventoryPage = require('../pages/inventory.page');
const cartPage = require('../pages/cart.page');

When('I add product {string} to cart', async (product) => {
  await inventoryPage.addProduct(product);
});

Then('cart badge should show {string}', async (count) => {
  await inventoryPage.cartBadge.waitForDisplayed();
  await expect(inventoryPage.cartBadge).toHaveText(count);
});

Then('cart should contain {string}', async (product) => {
  await inventoryPage.openCart();
  await expect(cartPage.cartItem(product)).toBeDisplayed();
});

When('I remove product {string} from cart', async (product) => {
  await inventoryPage.removeProduct(product);
});

Then('cart badge should not be visible', async () => {
  await expect(inventoryPage.cartBadge).not.toBeDisplayed();
});