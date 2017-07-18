(function() {
  'use strict';

  angular
    .module('book')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(bookService, $scope, localBookService, $mdDialog, $rootScope) {
    var vm = this;
    vm.searching = false;
    vm.searchTerm = '';
    vm.totalItems = 0;
    vm.startIndex = 0;
    vm.maxResults = 40;
    vm.totalPages = 0;

    /* realiza a pesquisa no google */
    vm.search = function(index){

      vm.items = [];
      vm.searching = true;
      vm.startIndex = index;

      bookService.get({ q: vm.searchTerm, startIndex : (index * vm.maxResults), maxResults : vm.maxResults }, function (resp) {
        vm.items = resp.items;
        vm.totalItems = resp.totalItems;
        vm.totalPages = Math.ceil(vm.totalItems / vm.maxResults);
        vm.searching = false;
      });
    }

    /* escuta o evento para realizar a pesquisa no main */
    var searching = $rootScope.$on('searching', function(event, data){
      vm.searchTerm = data.searchTerm;
      vm.search(0);
    });

    /* destroy o evento pra nao ter que ficar fazendo varias pesquisas ao mesmo tempo */
    $scope.$on('$destroy', function() {
        searching();
    });

  }
})();
