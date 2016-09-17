describe('Controller: Main', function() {
  'use strict';

  var tempNode = element(by.binding('main.temp'));
  var convNode = element(by.css('#temperature a'));

  it('should convert temperature value from 32 (F) to 0 (C) and vice versa', function() {
    browser.get('http://localhost:8080');

    tempNode.evaluate('main.temp = 32');

    convNode.click();

    tempNode.getText().then(function(value) {
      expect(value.substring(0,1)).toEqual('0');
    });

    tempNode.evaluate('main.temp = 0');

    convNode.click();

    tempNode.getText().then(function(value) {
      expect(value.substring(0,2)).toEqual('32');
    });

  });

});
