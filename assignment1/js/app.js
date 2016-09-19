(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.lunchMenu = '';
  $scope.lunchMessage = '';
  $scope.checkIfTooMuch = function () {
    var itemsCount = getItemsCount($scope.lunchMenu);
    if (itemsCount == 0) {
      $scope.lunchMessage = 'Please enter data first';
    } else if (itemsCount > 3) {
      $scope.lunchMessage = 'Too much!';
    } else {
      $scope.lunchMessage = 'Enjoy!';
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
});

})();
