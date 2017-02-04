(function () {
'use strict';

var maxItems = 3
var messageDataPrompt = "Please enter data first"
var messageObese = "Too Much!"
var messageAnorectic = "Enjoy!"

angular.module('LunchCheck', [])
.controller('LunchCheckController', lunchCheckController);

lunchCheckController.$inject = ["$scope"];
function lunchCheckController($scope) {
  // models
  $scope.menuItems = ""
  $scope.message = ""
  // handler for CheckIfTooMuch button
  $scope.displayMessage = function () {
    var numItems = countItems($scope.menuItems)
    $scope.message = getMessage(numItems)
  };
}

function countItems(commaSeperatedItems){
  var numItems = 0;
  if (isEmpty(commaSeperatedItems)){
    return numItems
  }
  var splitItems = commaSeperatedItems.split(",")
  for (var i = 0; i < splitItems.length; i++) {
    if (isEmpty(splitItems[i])) {
      console.warn("skipped empty item in index " + i)
      continue;
    }
    numItems++
  }
  console.log("Counted " + numItems + " Valid Items")
  return numItems;
}

function isEmpty(item){
  return (item || "").trim().length == 0
}

function getMessage(numItems){
  if (numItems == 0){
    return messageDataPrompt
  }
  if (numItems > maxItems) {
    return messageObese
  }
  return messageAnorectic
}

})();
