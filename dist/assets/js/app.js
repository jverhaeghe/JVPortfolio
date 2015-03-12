/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/12/2015.
 */
(function() {
    'use strict';

    angular.module('JVPortfolio', [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */

        'ngRoute',
        'ngAnimate',
        /*
         * Feature areas
         */
        'JVPortfolio.home',
        'JVPortfolio.contact'

    ]).config(['$routeProvider', function($routeProvider ) {
        $routeProvider.when('/accueil', {
            templateUrl: 'view_home/home.html',
            controller: 'HomeView'
        });
        $routeProvider.when('/contact', {
            templateUrl: 'view_contact/contact.html',
            controller: 'ContactView'
        });
        $routeProvider.otherwise({
            redirectTo: '/accueil'
        });
    }]);

})();
(function() {
  'use strict';
  angular.module('JVPortfolio.contact', ['ngRoute'])
    .controller('ContactView', ContactView);

  //Accueil.$inject = ["$scope","$rootScope"]; // needed for compression
  function ContactView(){

  }
})();
(function() {
  'use strict';

  angular.module('JVPortfolio.home', ['ngRoute'])
    .controller('HomeView', HomeView);

  //Accueil.$inject = ["$scope","$rootScope"]; // needed for compression
  function HomeView(){

  }
})();