(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  ctrl = this;
  this.categories = categories;

  // var cancellers = [];
  // var cancel = $rootScope.$on('$stateChangeError',
  // function(event, toState, toParams, fromState, fromParams, error){
  //   console.log(error);
  // });
  // cancellers.push(cancel);
  //
  // ctrl.$onDestroy = function () {
  //   cancellers.forEach(function (item) {
  //     item();
  //   });
  // }
}

})();
