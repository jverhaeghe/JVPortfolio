(function() {
  'use strict';

  angular.module('JVPortfolio.home', [])
    .controller('HomeView', HomeView);

  HomeView.$inject = ["$scope"]; // needed for compression
  function HomeView($scope){
    var vm = $scope;
    $scope.pageClass = "accueil";
  }
})();