class InventoryPage {
  get title() { return $('.title'); }
  get cartBadge() { return $('.shopping_cart_badge'); }
  get cartIcon() { return $('.shopping_cart_link'); }
  get menuBtn(){ return $('#react-burger-menu-btn'); }
  get logoutLink(){ return $('#logout_sidebar_link'); }

productAddBtn(productName){
  const id = productName.toLowerCase().replaceAll(' ', '-');
  return $(`[data-test="add-to-cart-${id}"]`);
  }

async addProduct(productName) {
  const selector = `[data-test="add-to-cart-${productName.toLowerCase().replaceAll(" ", "-")}"]`
  const button = await $(selector)

  await button.waitForDisplayed()
  await button.scrollIntoView()
  await button.waitForClickable()
  await button.click()
  }

async openCart(){
  await this.cartIcon.click();
  }

removeProductBtn(productName){
  return $(`[data-test="remove-${productName.toLowerCase().replace(/ /g,'-')}"]`);
  }

async removeProduct(productName){
  const btn = await this.removeProductBtn(productName);
  await btn.waitForClickable();
  await btn.click();
  }

async waitForPageLoaded(){
  await this.title.waitForDisplayed();
  }

async logout(){
  await this.menuBtn.click();
  await this.logoutLink.waitForClickable();
  await this.logoutLink.click();
  }
}



module.exports = new InventoryPage();