class CartPage {

  cartItem(productName){
    return $(`//div[@class="inventory_item_name" and text()="${productName}"]`);
  }

}

module.exports = new CartPage();