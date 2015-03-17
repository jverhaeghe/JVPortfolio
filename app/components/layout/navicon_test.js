'use strict';

describe('JVPortfolio.layout directive : navicon', function() {
  var element, scope;
  beforeEach(module('JVPortfolio.layout'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element =
        '<div ng-controller="NaviconController as vm"><button id="navicon" class="{{vm.isActive}}" ng-click="pressButton()"><span></span></button></div>';

    element = $compile(element)(scope);

    scope.$digest();
  }));

  it('in the begining, it must be inactive', inject(function() {
    expect(element.children()).toHaveClass('unactive');
  }));

  it('after being click it must be active', inject(function() {

    element.children().click();
    expect(element.children()).toHaveClass('active');
  }));

});