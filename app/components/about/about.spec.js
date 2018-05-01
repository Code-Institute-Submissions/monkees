describe('AboutController', function(){


    var $controller, AboutController;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.about'))

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;

        // Create instance of AboutController and set to namesake variable
        AboutController = $controller('AboutController', {});
    }));

    // Tests
    it('should be defined', function(){
        expect(AboutController).toBeDefined();
    });
});