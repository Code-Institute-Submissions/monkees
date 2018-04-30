describe('HomeController', function(){


    var $controller, HomeController;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.home'))

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;

        // Create instance of HomeController and set to namesake variable
        HomeController = $controller('HomeController', {});
    }));

    // Tests
    it('should be defined', function(){
        expect(HomeController).toBeDefined();
    });
});