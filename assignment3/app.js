(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = '';
  ctrl.found = [];

  ctrl.getMatchedMenuItems = function () {
    if (ctrl.searchTerm != '') {
      ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    } else {
      ctrl.found = [];
    }
  };

  ctrl.remove = function(index) {
    ctrl.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json'}).then(function (result) {
      var foundItems = [];
      var items = result.data.menu_items;
      for (var i = 0; i < items.length; ++i) {
        if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
          foundItems.push(items[i]);

        } else {
          console.log(items[i].description);
        }
      }
      return foundItems;
    });
  };
}

})();
