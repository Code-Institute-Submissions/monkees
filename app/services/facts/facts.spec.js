describe('Facts factory', function(){

    // SETUP
    var Facts;

    // Facts about the Monkees also hardcoded into facts.js
    var factsList = [
        'Only Peter and Micky appear in every episode of the TV show',
		'Davy was almost drafted by the army',
		'400 hundred musicians and actors auditioned for the Monkees TV show',
		'Micky and Michael both auditioned to play the Fonz on Happy Days',
		];

    // load api.facts module
    beforeEach(angular.mock.module('api.facts'));

    // injected facts factory (_Facts_) - That's a mouthful! - set to local Facts variable
    beforeEach(inject(function(_Facts_){
        Facts = _Facts_;
    }));

    // TESTS
    it('should exist', function(){
        expect(Facts).toBeDefined();
    });

    describe('The .all method', function(){

        it('should exist', function(){
            expect(Facts.all).toBeDefined();
        });

        it('should return all facts', function(){
            expect(Facts.all()).toEqual(factsList);
        });
    });
});