'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('JVPortfolio', function() {

  browser.get('index.html');

  it('should automatically redirect to /accueil when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/accueil");
  });


  describe('accueil', function() {

    beforeEach(function() {
      browser.get('index.html#/accueil');
    });


    it('should render accueil when user navigates to /accueil', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/This is the partial for Accueil/);
    });

  });


  describe('contact', function() {

    beforeEach(function() {
      browser.get('index.html#/contact');
    });


    it('should render view2 when user navigates to /contact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/This is the partial for contact./);
    });

  });

});
