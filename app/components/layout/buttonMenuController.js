/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com on 04/03/2015.
 */
(function() {
    'use strict';

    angular.module('jverhaeghePortfolio.layout')
        .controller('ButtonMenuController', ButtonMenuController);


    function ButtonMenuController($scope,$rootScope){

        $scope.pressButton = function(){

            console.log($rootScope.menuIsOpen);
            if($rootScope.menuIsOpen === "menu-open"){
                $rootScope.menuIsOpen = ""
            }else{
                $rootScope.menuIsOpen = "menu-open"
            }
        }
    }

})();
