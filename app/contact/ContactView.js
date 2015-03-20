(function() {
  'use strict';
  angular.module('JVPortfolio.contact', [])
    .controller('ContactView', ContactView);


  function ContactView($rootScope){

    $rootScope.currentPage = "contact";

  }
})();