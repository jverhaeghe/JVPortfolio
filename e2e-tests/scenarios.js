'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('JVPortfolio', function() {

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });

  };
  browser.get('index.html');

  it('should automatically redirect to /accueil when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/accueil");
  });




  describe('accueil', function() {

    beforeEach(function() {
      browser.get('index.html#/accueil');
    });


    it('should render accueil when user navigates to /accueil', function() {
      expect(hasClass(element(by.css('.page')), 'accueil')).toBe(true);
    });

    it('should let the user go to an other page',function() {

    });

    it('should send data to google analytic',function() {

    });

    it('should be able to get the pdf CV',function() {

    });

  });


  describe('contact', function() {

    beforeEach(function() {
      browser.get('index.html#/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(hasClass(element(by.css('.page')), 'contact')).toBe(true);
    });

    it('should be able to open the menu',function() {

    });



  });


});
