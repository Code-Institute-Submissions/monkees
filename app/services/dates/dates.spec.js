describe('Dates factory', function(){

    // SETUP
    var Dates;

    // Hardcoded dates
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