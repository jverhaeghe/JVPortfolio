'use strict';

describe('JVPortfolio.home module', function() {

  var ctrl, scope;
  beforeEach(module('JVPortfolio.home'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new(); //get a childscope
    ctrl = $controller("HomeView", {$scope:scope }); //Pass it as argument as $scope's value
  }));

  describe('home controller', function(){

    it('should be an instance of HomeView', inject(function($controller) {
      //spec body
      expect(ctrl).toBeDefined();
    }));

    it('should be with a class accueil', inject(function($controller) {
      //spec body
      expect(scope.pageClass).toMatch("accueil");
    }));


  });
});