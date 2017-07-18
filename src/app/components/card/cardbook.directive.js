(function() {
  'use strict';

  angular
    .module('book')
    .directive('cardBook', cardBook);

  /** @ngInject */
  function cardBook() {
    var directive = {
      restrict: 'A',
      scope: {
        items : '=',
        searchTerm : '@',
        router : '@'
      },
      templateUrl: 'app/components/card/card.html',
      controller: CardBookController,
      controllerAs: 'card',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CardBookController($scope, $mdDialog, localBookService, $mdToast) {
      var vm = this;

      /* abre o modal de detalhes do livro */
      vm.openBookDetail = function(ev, book) {
        $mdDialog.show({
          controller: function(local){
            var vm = this;
            vm.book = local.book;

            vm.cancel = function(){
              $mdDialog.cancel();
            }
          },
          templateUrl: 'app/components/bookDialog.html',
          controllerAs: 'dialog',
          local: { 'book': book},
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true
        });
      }

      /* add o filme ao favoritos */
      vm.addToFavorites = function(book){

        localBookService.Add(book).then(function(){
          $mdToast.show(
            $mdToast.simple()
              .textContent('Livro Adicionado com sucesso')
              .position('bottom center')
              .hideDelay(3000)
          );
        });
      }

      /* custom dialog com a chamada para remocao */
      vm.removeToFavorites = function(ev, book) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Remover Livro')
              .textContent('Tem certeza que deseja remover este livro?')
              .ariaLabel('Remover Livro')
              .targetEvent(ev)
              .ok('Confirmar')
              .cancel('Cancelar');

        $mdDialog.show(confirm).then(function() {
          vm.confirmRemoveToFavorites(book);
        }, function() {
          // todo negate
        });
      }

      /* confirmacao da remocao */
      vm.confirmRemoveToFavorites = function(book){
        localBookService.Remove(book).then(function(){
          $mdToast.show(
            $mdToast.simple()
              .textContent('Livro removido com sucesso')
              .position('bottom center')
              .hideDelay(3000)
          );
        });
      }
    }
  }

})();
