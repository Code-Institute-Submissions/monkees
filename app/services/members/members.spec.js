describe('Members factory', function(){

    // Setup
    var Members;

    var membersList = [
        {
            name: 'Peter tork',
        }
    ]

    // load api.members module
    beforeEach(angular.mock.module('api.members'));

    // injected Members factory set to local Members variable
    beforeEach(inject(function(_Members_){
        Members = _Members_;
    }));


    it('should be defined', function(){
        expect(Members).toBeDefined();
    });

    describe('The .all method', function(){

        it('should exist', function(){
            expect(Members.all).toBeDefined();
        });

        it('should return all members', function(){
            expect(Members.all()).toEqual(membersList);
        });
    });
});