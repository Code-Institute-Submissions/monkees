describe('MusicController', function(){


    var $controller, MusicController;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.music'))

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;

        // Create instance of HomeController and set to namesake variable
        MusicController = $controller('MusicController', {});
    }));

    // Tests
    it('should be defined', function(){
        expect(MusicController).toBeDefined();
    });
});