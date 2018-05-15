describe('DatesController', function(){

    // $controller is set to angular's built-in controller service
    var $controller, DatesController, DatesFactory;

    // Use the hardcoded dates for our tests
    var datesList = [
        {
            date: new Date('June, 2, 2016'),
            venue: 'Orpheum Theatre',
            city: 'Los Angeles',
            country: 'America'
            },
        {
            date: new Date('June, 3, 2018'),
            venue: "Humphrey's Concerts by the Bay",
            city: 'San Diego',
            country: 'America'
            },
        {
            date: new Date('June, 5, 2018'),
            venue: 'City National Grove of Anaheim',
            city: 'California',
            country: 'America'
            },
        {
            date: new Date('June, 6, 2018'),
            venue: 'Mountain Winery',
            city: 'California',
            country: 'America'
            },
        {
            date: new Date('June, 8, 2018'),
            venue: 'Bob Hope Theatre',
            city: 'Stockton',
            country: 'California'
            },
        {
            date: new Date('June, 9, 2018'),
            venue: 'South Shore Room',
            city: 'Stateline',
            country: 'America'
            },
        {
            date: new Date('June, 12, 2018'),
            venue: 'Paramount Theatre',
            city: 'Denver',
            country: 'America'
            },
        {
            date: new Date('June, 14, 2018'),
            venue: 'Copernicus Center',
            city: 'Chicago',
            country: 'America'
            },
        {
            date: new Date('June, 15, 2018'),
            venue: 'Rose Music Center at The Heights',
            city: 'Huber Heights',
            country: 'America'
            },
        {
            date: new Date('December, 16, 2016'),
            venue: 'Jupiters Hotel and Casino Theatre',
            city: 'Broadbeach',
            country: 'Australia'
            },
        {
            date: new Date('December, 15, 2016'),
            venue: 'Enmore Theatre',
            city: 'Newtown',
            country: 'Australia'
            },
        {
            date: new Date('December, 13, 2016'),
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