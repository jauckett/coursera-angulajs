(function () {
'use strict';

// var shoppingList = [
//   "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
// ];


angular.module('ShoppingListApp', [])
.controller('ItemsToBuyController', ItemsToBuyController)
.controller('ItemsBoughtController', ItemsBoughtController)
.service('ShoppingListService', ShoppingListService);

ItemsToBuyController.$inject = ['ShoppingListService'];
function ItemsToBuyController(ShoppingListService) {
  var toBuy = this;

  toBuy.items = ShoppingListService.getItemsToBuy();

  toBuy.bought = function(id) {
    console.log("Bought item number : " + id);
    ShoppingListService.bought(id);
  };
}

ItemsBoughtController.$inject = ['ShoppingListService'];
function ItemsBoughtController(ShoppingListService) {
  var bought = this;

  bought.items = ShoppingListService.getItemsBought();

}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [{ name: "cookies", quantity: 10 },
                    { name: "softdrinks", quantity: 5},
                    { name: "chips", quantity: 3},
                    { name: "cheese", quantity: 2},
                    { name: "nothing", quantity: 1}
                    ];
  var itemsBought = [];

  service.bought = function(id) {
    itemsBought.push(itemsToBuy[id]);
    itemsToBuy.splice(id, 1);
  }

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function() {
    return itemsBought;
  }
}


})();
