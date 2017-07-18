(function() {
  'use strict';

  describe('service bookService', function() {
    var bookService;

    beforeEach(module('book'));
    beforeEach(inject(function(_bookService_) {
      bookService = _bookService_;
    }));

    it('should be registered', function() {
      expect(bookService).not.toEqual(null);
    });

    describe('get() function', function() {
      it('should exist', function() {
        expect(bookService.get).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = bookService.get({q : 'naruto'});
        expect(data).toEqual(jasmine.any(Object));
        // expect(data[0]).toEqual(jasmine.any(Object));
        // expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
