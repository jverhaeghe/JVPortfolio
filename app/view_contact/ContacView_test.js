'use strict';

describe('JVPortfolio.contact module', function() {
  var ctrl, scope;
  beforeEach(module('JVPortfolio.contact'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new(); //get a childscope
    ctrl = $controller("ContactView", {$scope:scope }); //Pass it as argument as $scope's value
  }));
  describe('JVPortfolio.contact  ContactView', function(){

    it('should be an instance of ContactView', inject(function($controller) {
      //spec body
      expect(ctrl).toBeDefined();
    }));

    it('should be with a class ContactView', inject(function($controller) {
      //spec body
      expect(scope.pageClass).toMatch("contact");
    }));

  });
});