/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/25/2015.
 */
(function() {
    'use strict';

    angular.module('JVPortfolio.services', ['ngResource'])
        .factory('Projects', Projects);

    Projects.$inject = ["$resource"]; // needed for compression
    function Projects($resource){

        return $resource('projects/:projectId.json', {}, {
            query: {method:'GET', params:{projectId:'projects'}, isArray:true}
        });


    }
})();