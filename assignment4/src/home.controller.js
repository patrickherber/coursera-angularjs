(function () {
'use strict';

angular.module('MenuApp')
.controller('HomeController', HomeController);

function HomeController() {
  ctrl = this;

  $ctrl.$onInit = function () {
    var cancellers = [];
    var cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log(error);
    });
    cancellers.push(cancel);
  }

  ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  }
}

})();
