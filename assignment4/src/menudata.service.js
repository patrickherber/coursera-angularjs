(function () {

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
    return $http({url:'https://davids-restaurant.herokuapp.com/categories.json'}).then(function (result) {
      return result.data;
    });
  };

  getItemsForCategory = function(categoryShortName) {
    return $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName}).then(function (result) {
      return result.data.menu_items;
    });
  };
}

})();