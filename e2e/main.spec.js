'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include nabvar H2 with correct text', function() {
    expect(page.logo.getText()).toBe('Books');
  });

});
