(function () {
'use strict';

angular.module('MenuApp')
.controller('HomeController', HomeController);

HomeController.$inject = ['$rootScope']
function HomeController($rootScope) {
  var ctrl = this;
  var cancellers = [];

  ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log('Start', toState);
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log('Success', toState);
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
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
