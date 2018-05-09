describe('DatesController', function(){

    // $controller is set to angular's built-in controller service
    var $controller, DatesController, DatesFactory;

    // Use the hardcoded dates for our tests
    var datesList = [
        {
            date: '16th Dec 2016',
            venue: 'Jupiters Hotel and Casino Theatre',
            city: 'Broadbeach',
            country: 'Australia'
            },
        {
            date: '15th Dec 2016',
            venue: 'Enmore Theatre',
            city: 'Newtown',
            country: 'Australia'
            },
        {
            date: '13th Dec 2016',
            venue: 'Perth Concert Hall',
            city: 'Perth',
            country: 'Australia'
            },
        ];

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.dates'))

    // Add the dates service
    beforeEach(angular.mock.module('api.dates'));

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_, _Dates_){
        $controller = _$controller_;
        DatesFactory = _Dates_;

        // Add a spy to the all method of the dates factory
        // Chain with the callFake method to supply our own return value, datesList
        spyOn(DatesFactory, 'all').and.callFake(function(){
            return datesList;
        });

        // Create instance of DatesController and set to namesake variable
        DatesController = $controller('DatesController', {Dates: DatesFactory});
    }));

    // Tests
    it('should be defined', function(){
        expect(DatesController).toBeDefined();
    });

    it('should initialize with a call to Dates.all()', function(){
        // Using the spy we declared above, check a call to the all method is made
        expect(DatesFactory.all).toHaveBeenCalled();
        // Check the controllers view-model property dates will be set to the datesList above
        expect(DatesController.dates).toEqual(datesList);
    });
});