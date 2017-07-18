(function() {
  'use strict';

  angular
      .module('book')
      .filter('highlight', highlight);

	/** @ngInject */
	function highlight() {
		return function(text, phrase) {
			return (phrase && text) ? text.replace(new RegExp('('+phrase+')', 'gi'), '<kbd>$1</kbd>') : text;
		}
	}

})();