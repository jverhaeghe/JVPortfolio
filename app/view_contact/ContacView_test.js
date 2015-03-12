'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('JVPortfolio.contact'));

  describe('view2 controller', function(){

    it('should be an instance of ContactView', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('ContactView');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});