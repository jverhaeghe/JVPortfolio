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
                templateUrl: '/navicon.html'
            };
        });


    function NaviconController($scope,$rootScope){
        var vm = this;

        vm.isActive = 'unactive';

        $scope.pressButton = function(){

            if(vm.isActive === "unactive"){
               showMenu();
            }else{
                hideMenu();
            }

        };

        function showMenu(){
            $rootScope.menuIsOpen = "menu-open";
            vm.isActive = "active";
        }

        function hideMenu(){
            $rootScope.menuIsOpen = "menu-closed";
            vm.isActive = "unactive";
        }

        $rootScope.$on( "$routeChangeStart", function(event, next) {
            hideMenu();
        });
    }

})();
