describe('HomeController', function(){


    var $controller, HomeController, FactsFactory;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.home'));
    beforeEach(angular.mock.module('api.facts'));
    

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_, _Facts_){
        $controller = _$controller_;
        FactsFactory = _Facts_;

        // Create instance of HomeController and set to namesake variable
        HomeController = $controller('HomeController', { Facts: FactsFactory });
    }));

    // Tests
    it('should be defined', function(){
        expect(HomeController).toBeDefined();
    });
});