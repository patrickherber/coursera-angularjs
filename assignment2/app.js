(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  toBuyCtrl.itemName = "";
  toBuyCtrl.itemQuantity = "";

  toBuyCtrl.addItem = function () {
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }

  toBuyCtrl.buy = function (index) {
    ShoppingListCheckOffService.buy(index);
  }

  toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtCtrl = this;
  boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {name: 'Cookies', quantity: 4},
    {name: 'Chips', quantity: 2},
    {name: 'Chocolate', quantity: 5},
    {name: 'Milk', quantity: 2},
    {name: 'Sugar', quantity: 1}
  ];
  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.buy = function (index) {
    var item = toBuyItems[index];
    boughtItems.push(item);
    toBuyItems.splice(index, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
