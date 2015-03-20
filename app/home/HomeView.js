(function() {
  'use strict';

  angular.module('JVPortfolio.home', [])
    .controller('HomeView', HomeView);

  HomeView.$inject = ["$rootScope"]; // needed for compression
  function HomeView($rootScope){
    $rootScope.currentPage = "accueil";

  }
})();