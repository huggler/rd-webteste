(function() {
  'use strict';

  angular
    .module('book')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'A',
      replace:true,
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($rootScope, $mdToast, $window, $state) {
      var vm = this;

      vm.go = function(term){
        $rootScope.$emit('searching', {searchTerm:term});
      }
      
      vm.goSearch = function(){
        if(!vm.txtSearch){

          $mdToast.show(
            $mdToast.simple()
              .textContent('Digite o nome do livro')
              .position('bottom center')
              .hideDelay(3000)
          );
          $window.document.querySelector('#input-search').focus();
          return false;
        }

        if($state.current.name !== 'home'){
          var promisse = $state.go('home');
          promisse.then(function(){
            vm.go(vm.txtSearch);
          });
        }else{
          vm.go(vm.txtSearch);
        }
      }
    }
  }

})();
