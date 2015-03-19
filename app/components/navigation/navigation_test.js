'use strict';

describe('JVPortfolio.navigation directive : navicon', function() {
  var elementNavicon, scopeNavicon;

  var elementMenu, scopeMenu;

  beforeEach(module('JVPortfolio.navigation'));

  beforeEach(inject(function($rootScope, $compile) {
    scopeNavicon = $rootScope.$new();

    elementNavicon =
        '<div ng-controller="NaviconController as vm"><button id="navicon" class="{{vm.isActive}}" ng-click="pressButton()"><span></span></button></div>';

    elementNavicon = $compile(elementNavicon)(scopeNavicon);

    scopeNavicon.$digest();

    //----------------------------------

    scopeMenu = $rootScope.$new();

    elementMenu =
        '<nav jv-menu>';

    elementMenu = $compile(elementMenu)(scopeMenu);

    scopeMenu.$digest();

  }));

  // -- NAVICON
  it('in the begining, it must be inactive', inject(function() {
    expect(elementNavicon.children()).toHaveClass('unactive');
  }));

  it('after being click it must be active', inject(function() {
    elementNavicon.children().click();
    expect(elementNavicon.children()).toHaveClass('active');
  }));

  // -- MENU
  it('must display the menu with the tag "menu"',function(){

  });
  it('must show where the user is',function(){

  });
  it('must bring the user to a list of work if it is a mobile device',function(){

  });
  it('must bring the user to the first work if it is a desktop',function(){

  });

});