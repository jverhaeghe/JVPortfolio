/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/19/2015.
 */
(function() {
    'use strict';

    angular
        .module('JVPortfolio.navigation',[])
        .controller('JVMenuController',JVMenuController)
        .directive('jvMenu',JVMenu)
        .service('JVMenuService',JVMenuService);

    JVMenuController.$inject = ["$scope","$rootScope"];
    function JVMenuController($scope,$rootScope){

        var vm = $scope;

        vm.$watch(function() {
            return $rootScope.device;
        }, function() {
           link4Portfolio();
        }, true);

        link4Portfolio();
        function link4Portfolio(){
            switch($rootScope.device){

                case "tablet" :
                case "desktop" :
                    vm.lienPorfolio = "#detail-portfolio:1"
                    break

                case "mobile" :
                    vm.lienPorfolio = "#list-postfolio"
                    break
            }
        }

    };

    function JVMenu(){

        function link(scope, element, attrs) {
            var lienPorfolio;

            function updateLink(state){
                console.log('eee');
            }

        };
        return {
            restrict: 'A',
            templateUrl: '/components/navigation/menu.html',
            link: link
        }

    };

    function JVMenuService($rootScope){
        var service = this;
        service.isOpen = false;

        service.showMenu = function(){
            $rootScope.menuIsOpen = "menu-open";
            service.isOpen = true;
        }

        service.hideMenu = function(){
            $rootScope.menuIsOpen = "menu-closed";
            service.isOpen = false;
        }

        $rootScope.$on( "$routeChangeStart", function(event, next) {
            service.hideMenu();
        });

    }


})();
