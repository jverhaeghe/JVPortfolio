'use strict';
describe('JVPortfolio.navigation', function() {
  var createService,service;
  var _window;

  beforeEach(module('JVPortfolio.navigation', function($provide){
    $provide.value('$window', {innerWidth:450});
  }));
  beforeEach(inject(function($injector,$templateCache,$window) {

    _window = $window
    // initiate service
    createService = function() {
      return $injector.get('JVMenuService');
    };
    service = createService();

    spyOn(service, 'showMenu').and.callThrough();

    // for using url template inside the directive Menu
    $templateCache.put('/components/navigation/menu.html'
        , '<ul class="{{currentPage}}"><li><a href="#accueil" class="button btn-accueil">Accueil<span class="arrow"></span></a></li><li><a href="{{lienPorfolio}}" class="button btn-portfolio">Portfolio<span class="arrow"></span></a></li><li><a href="asset/pdf/cv_verhaeghe_julien.pdf" class="button btn-cv">C.V print<span class="arrow"></span></a></li> <li><a href="#contact" class="button btn-contact">Me contacter<span class="arrow"></span></a></li> </ul>');




  }));

  describe('JVMenuService', function() {

    it('should be defined', function(){
      expect(service).toBeTruthy();
    });
    it('by default it must be closed',function() {
      expect(service.isOpen).toBe(false);
    });
    it('after opening menu, isOpen must be equal true',function() {
      service.showMenu();
      expect(service.isOpen).toBe(true);
    });

  });
  describe('JVPortfolio.navigation directive : navicon', function() {
    var elementNavicon, scopeNavicon;


    beforeEach(inject(function($rootScope, $compile) {

      scopeNavicon = $rootScope.$new();

      elementNavicon =
          '<div ng-controller="NaviconController as vm"><button id="navicon" class="{{vm.isActive}}" ng-click="pressButton()"><span></span></button></div>';

      elementNavicon = $compile(elementNavicon)(scopeNavicon);

      scopeNavicon.$digest();
    }));

    it('after being click it must be called JVMenuService', function() {
      elementNavicon.children().click();
      expect(service.showMenu).toHaveBeenCalled();
    });

  });

  describe('JVPortfolio.navigation directive : menu', function() {
    var elementMenu, scopeMenu;
    var btnPortfolio ;
    var _rootScope;
    beforeEach(inject(function($rootScope, $compile) {

      _rootScope = $rootScope;
      scopeMenu = $rootScope.$new();
      scopeMenu.currentPage = "accueil";
      elementMenu =
          '<nav jv-menu></nav>';

      elementMenu = $compile(elementMenu)(scopeMenu);
      scopeMenu.$digest();
      btnPortfolio = elementMenu.find('.btn-portfolio');
    }));

    it('must display the menu with the tag "jv-menu"',function(){

      expect(elementMenu).toContainElement("ul");
    });
    it('must show where the user is',function(){
      expect(elementMenu).toContainElement(".accueil");
    });
/*

    it('must bring the user to a list of work if it is a mobile device',function(){
      _rootScope.device = "mobile";
      expect(btnPortfolio.attr('href')).toBe('list-portfolio');

    });
    it('must bring the user to the first work if it is a desktop',function(){
      _rootScope.device = "desktop";
      expect(btnPortfolio.attr('href')).toBe('detail-portfolio:1');
    });
*/

  });


});


