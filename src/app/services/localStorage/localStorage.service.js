(function() {
  'use strict';

  angular
      .module('book')
      .service('localBookService', localBookService);

  /** @ngInject */
  function localBookService($rootScope, $q) {

    var service = {

        books: [],

        SaveState: function () {
            sessionStorage.userService = angular.toJson(service.books);
            return $q.resolve(sessionStorage.userService);
        },

        RestoreState: function () {
            service.books = angular.fromJson(sessionStorage.userService) || [];
        },

        Remove: function (book) {
            var index = service.books.indexOf(book);
            service.books.splice(index, 1); 
            return service.SaveState();
        },

        Add : function(book){
          service.books.push(book);
          return service.SaveState();
        }
    }

    return service;
  }

})();