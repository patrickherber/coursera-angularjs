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
          return [];
          // MenuDataService.getAllCategories().then(function (result) {
          //   return result.data;
          // });
        }]
      },
      templateUrl: 'src/categories.html'
    })

    .state('items', {
      url: '/items/{category}',
      controller: 'ItemsController as ctrl',
      templateUrl: 'src/items.html'
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          var category = $stateParams.category;
          return [];
        }]
      }
    });

    $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log(error);
    });
}


})();
