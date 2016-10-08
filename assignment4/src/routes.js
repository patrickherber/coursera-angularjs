(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.html'
    })

    .state('categories', {
      url: '/categories',
      controller: 'CategoriesController as ctrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      },
      templateUrl: 'src/categories.html'
    })

    .state('items', {
      url: '/items',
      controller: 'ItemsController as ctrl',
      templateUrl: 'src/items.html'
    });
}


})();
