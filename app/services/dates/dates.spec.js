describe('Dates factory', function(){

    // SETUP
    var Dates;

    // Hardcoded dates
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


    // load api.dates module
    beforeEach(angular.mock.module('api.dates'));

    // injected dates factory (_Dates_) set to local Dates variable
    beforeEach(inject(function(_Dates_){
        Dates = _Dates_;
    }));

    // TESTS
    it('should exist', function(){
        expect(Dates).toBeDefined();
    });

    describe('The .all method', function(){

        it('should exist', function(){
            expect(Dates.all).toBeDefined();
        });

        it('should return all dates', function(){
            expect(Dates.all()).toEqual(datesList);
        });
    });
});