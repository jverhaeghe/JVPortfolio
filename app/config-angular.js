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
        'angular-google-analytics',
        'bhResponsiveImages',
        /*
         * Feature areas
         */
        'JVPortfolio.helper',
        'JVPortfolio.services',
        'JVPortfolio.navigation',
        'JVPortfolio.portfolioList',
        'JVPortfolio.map',
        'JVPortfolio.home',
        'JVPortfolio.contact'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/accueil', {
            templateUrl: 'home/home.html',
            controller: 'HomeView'
        });
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'ContactView'
        });
        $routeProvider.when('/portfolio', {
            controller: 'PortfolioDetail'
        });
        $routeProvider.when('/list-portfolio', {
            templateUrl: 'portfolio_list/portfolio_list.html',
            controller: 'PortfolioList'
        });
        $routeProvider.otherwise({
            redirectTo: '/accueil'
        });
    }])
    .config(function(AnalyticsProvider) {
        // initial configuration
        AnalyticsProvider.setAccount('UA-60465363-1');
        // track all routes (or not)
        AnalyticsProvider.trackPages(true);

        //this.menuIsOpen = appState.menuIsOpen;
    })
    .run(function(Analytics,$rootScope) {
        // eliminate click delay with mobile device
        FastClick.attach(document.body);
        // know in which type of screen we ar
        angular.element(window).on('resize', function(){
            if(window.innerWidth < 500){
                $rootScope.device = "mobile";
            }else{
                $rootScope.device = "desktop";
            }
        });
    });




})();