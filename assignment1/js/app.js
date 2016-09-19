(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = '';
  $scope.lunchMessage = '';
  $scope.lunchColor = 'red';
  $scope.checkIfTooMuch = function () {
    var itemsCount = getItemsCount($scope.lunchMenu);
    if (itemsCount == 0) {
      $scope.lunchMessage = 'Please enter data first';
      $scope.lunchColor = 'red';
    } else if (itemsCount > 3) {
      $scope.lunchMessage = 'Too much!';
      $scope.lunchColor = 'green';
    } else {
      $scope.lunchMessage = 'Enjoy!';
      $scope.lunchColor = 'green';
    }
  };
  function getItemsCount(value) {
    var items = value.split(',');
    var count = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].trim() != '') {
        ++count;
      }
    }
    return count;
  }
}
})();
