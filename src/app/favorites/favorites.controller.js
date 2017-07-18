(function() {
  'use strict';

  angular
    .module('book')
    .controller('FavoritesController', FavoritesController);

  /** @ngInject */
  function FavoritesController(bookService, $scope, localBookService) {
    var vm = this;

    localBookService.RestoreState();

    vm.items = localBookService.books;
  }
})();