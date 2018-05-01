describe('ContactController', function(){


    var $controller, ContactController;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.contact'))

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;

        // Create instance of ContactController and set to namesake variable
        ContactController = $controller('ContactController', {});
    }));

    // Tests
    it('should be defined', function(){
        expect(ContactController).toBeDefined();
    });
});