(function() {
  'use strict';
  angular.module('JVPortfolio.contact', [])
    .controller('ContactView', ContactView);

  ContactView.$inject = ["$scope"]; // needed for compression
  function ContactView($scope){
    var vm = $scope;
    $scope.pageClass = "contact";
  }
})();