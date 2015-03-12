'use strict';

describe('JVPortfolio.home module', function() {

  beforeEach(module('JVPortfolio.home'));

  describe('home controller', function(){

    it('should be an instance of HomeView', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('HomeView');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});