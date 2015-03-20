/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/20/2015.
 */
describe('JVPortfolio.helper WatchResize', function() {


    var element,scope;
    var _rootScope;

    angular.mock.module('JVPortfolio.helper', function($provide){
        $provide.value('$window', {innerWidth:1250});
    });

    beforeEach(inject(function($rootScope,$compile,$window) {

        _rootScope = $rootScope;
        scope = $rootScope.$new();
        element =
            '<div watch-resize class="{{device}}"></div>';

        element = $compile(element)(scope);

        scope.$digest();
    }));
    /*it('must bring the user to a list of work if it is a mobile device',function(){
        console.log(element);
        expect(element).toHaveClass('mobile');
    });
    it('must bring the user to the first work if it is a desktop',function(){


        console.log(element);
        expect(element).toHaveClass('desktop');
    });
*/

});