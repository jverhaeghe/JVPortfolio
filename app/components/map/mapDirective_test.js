'use strict';

describe('JVPortfolio.map directive : jv-map', function() {
    var element, scope;

    beforeEach(module('JVPortfolio.map'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        element =
            '<jv-map latitude="66.1" longitude="66.1"></jv-map>';

        element = $compile(element)(scope);

        scope.$digest();
    }));


    it("should draw a map", function(){
        expect(element.attr('id')).toEqual("gmaps");
    });



});