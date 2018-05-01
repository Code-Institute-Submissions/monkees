describe('PhotosController', function(){


    var $controller, PhotosController;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.photos'))

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;

        // Create instance of PhotosController and set to namesake variable
        PhotosController = $controller('PhotosController', {});
    }));

    // Tests
    it('should be defined', function(){
        expect(PhotosController).toBeDefined();
    });
});