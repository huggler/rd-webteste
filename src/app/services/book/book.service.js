(function() {
  'use strict';

  angular
      .module('book')
      .service('bookService', bookService);

  /** @ngInject */
  function bookService(api, $resource) {

      return $resource(api,
        {
          callback: 'JSON_CALLBACK',
          key: 'AIzaSyATldFLGtPPZVLecasP0nFXkX6RqXa7VEI'
        },
        {
          get: {
            method: 'JSONP'
          }
        });
  }

})();