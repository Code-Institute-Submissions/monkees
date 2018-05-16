describe('PhotosController', function(){


    var $controller, PhotosController, PhotosFactory;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.photos'));
    beforeEach(angular.mock.module('api.photos'));

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_, _Photos_){
        $controller = _$controller_;
        PhotosFactory = _Photos_;

        // Create instance of PhotosController and set to namesake variable
        PhotosController = $controller('PhotosController', {Photos: PhotosFactory});
    }));

    // Tests
    it('should be defined', function(){
        expect(PhotosController).toBeDefined();
    });
});