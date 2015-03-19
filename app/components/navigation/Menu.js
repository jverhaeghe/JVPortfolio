/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/19/2015.
 */
(function() {
    'use strict';

    angular
        .module('JVPortfolio.navigation',[])
        .directive('jvMenu',JVMenu);

    function JVMenu(){

        return {
            restrict: 'A',
            templateUrl: '/components/navigation/menu.html'
        };
    }


})();
