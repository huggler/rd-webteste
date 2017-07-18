(function() {
  'use strict';

  angular
    .module('book')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'app/favorites/favorites.html',
        controller: 'FavoritesController',
        controllerAs: 'favorites'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
