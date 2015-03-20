/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com on 04/03/2015.
 */
(function() {
    'use strict';

    angular.module('JVPortfolio.navigation')
        .controller('NaviconController', NaviconController)
        .directive('navicon', function() {
            return {
                restrict: 'E',
                templateUrl: '/components/navigation/navicon.html'
            };
        });


    function NaviconController(JVMenuService,$scope,$rootScope){
        var vm = this;

        JVMenuService.isOpen = false;

        $scope.pressButton = function(){

            if(JVMenuService.isOpen === false){
                JVMenuService.showMenu();
            }else{
                JVMenuService.hideMenu();
            }

        };

    }

})();
