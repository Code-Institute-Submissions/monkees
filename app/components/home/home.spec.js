describe('HomeController', function(){


    var $controller, HomeController, FactsFactory, DatesFactory, MusicFactory, PhotosFactory;

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.home'));
    beforeEach(angular.mock.module('api.facts'));
    beforeEach(angular.mock.module('api.dates'));
    beforeEach(angular.mock.module('api.music'));
    beforeEach(angular.mock.module('api.photos'));
    

    // Inject dependencies as set to local variables
    beforeEach(inject(function(
        _$controller_, _Facts_, _Dates_, _Music_, _Photos_,
    ){
        $controller = _$controller_;
        FactsFactory = _Facts_;
        DatesFactory = _Dates_;
        MusicFactory = _Music_;
        PhotosFactory = _Photos_;

        // Create instance of HomeController and set to namesake variable, and define service injections
        HomeController = $controller('HomeController', {
            Facts: FactsFactory,
            Dates: DatesFactory,
            Music: MusicFactory,
            Photos: PhotosFactory,
        });
    }));

    // Tests
    it('should be defined', function(){
        expect(HomeController).toBeDefined();
    });
});