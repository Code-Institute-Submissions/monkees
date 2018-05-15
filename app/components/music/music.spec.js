describe('MusicController', function(){


    var $controller, MusicController, MusicFactory;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.music'))
    beforeEach(angular.mock.module('api.music'))

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_, _Music_){
        $controller = _$controller_;
        MusicFactory = _Music_;

        // Create instance of HomeController and set to namesake variable
        MusicController = $controller('MusicController', {Music: MusicFactory});
    }));

    // Tests
    it('should be defined', function(){
        expect(MusicController).toBeDefined();
    });
});