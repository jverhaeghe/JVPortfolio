/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/20/2015.
 */
(function() {
    'use strict';

    angular.module('JVPortfolio.helper', [])
        .directive('watchResize', WatchResize);


    function WatchResize($rootScope,$window){

        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                angular.element($window).on('resize', function(){
                    scope.$apply(function(){
                        getDevice();
                    });
                });
                getDevice();
                function getDevice(){

                        if(window.innerWidth < 500){
                            $rootScope.device = "mobile"
                        }else if(window.innerWidth < 1200){
                            $rootScope.device = "tablet"
                        }else{
                            $rootScope.device = "desktop"
                        }


                };
            }
        }
    }
})();