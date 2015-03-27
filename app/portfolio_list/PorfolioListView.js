/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/18/2015.
 */
(function() {
    'use strict';

    angular.module('JVPortfolio.portfolioList', [])
        .controller('PortfolioList', PortfolioList);

    PortfolioList.$inject = ["$rootScope","$scope","Projects"]; // needed for compression
    function PortfolioList($rootScope,$scope,Projects){
        $rootScope.currentPage = "list-portfolio";
        var vm = $scope;
        vm.projects = Projects.query();
    }
})();