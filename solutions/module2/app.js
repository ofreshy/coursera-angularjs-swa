(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyListController', ToBuyListController)
.controller('BoughtListController', BoughtListController)
.service('ShoppingListService', ShoppingListService);


ToBuyListController.$inject = ["ShoppingListService"];
function ToBuyListController(ShoppingListService) {
  var tbl = this;

  tbl.items = ShoppingListService.getToBuyItems();

  tbl.buyItem = ShoppingListService.buyItem
}

BoughtListController.$inject = ["ShoppingListService"];
function BoughtListController(ShoppingListService) {
  var bl = this;

  bl.items = ShoppingListService.getBoughtItems();
}

function ShoppingListService() {
  var service = this;

  // Initial items to buy
  var itemsToBuy = [
    {
      name : "Jameson",
      quantity: "5 bottles",
    },
    {
      name : "Glen Morangie",
      quantity: "2 bottles",
    },
    {
      name : "Chivas",
      quantity: "4 bottles",
    },
    {
      name : "Jonnie Walker",
      quantity: "1 bottle",
    },
    {
      name : "Powers",
      quantity: "10 bottles"
    },
  ];

  // no items are bought to begin with
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    // splice returns a list
    var items = itemsToBuy.splice(itemIndex, 1)
    // we know it to have only one item which is now bought
    boughtItems.push(items[0])
  };

  service.getToBuyItems = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function(){
    return boughtItems;
  }
}

})();
