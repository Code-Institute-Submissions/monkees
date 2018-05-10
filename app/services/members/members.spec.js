describe('Members factory', function(){

    // Setup
    var Members;

    var membersList = [
        {
            name: 'Peter Tork',
            born: '13 February 1942',
            instruments: [
                'bass guitar',
                'vocals',
                'keyboards',
            ],
            website: 'https://www.petertork.com',
            wikipedia: 'https://en.wikipedia.org/wiki/Peter_Tork',
            image: "https://upload.wikimedia.org/wikipedia/commons/4/43/WikiTork.jpg",
        },
        {
            name: 'Micky Dolenz',
            born: '8 March 1945',
            instruments: [
                'drums',
                'vocals',
            ],
            website: 'https://www.mickydolenz.com',
            wikipedia: 'https://en.wikipedia.org/wiki/Micky_Dolenz',
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Micky_Dolenz_at_the_2009_Tribeca_Film_Festival.jpg",
        },
        {
            name: 'Davy Jones',
            born: '30 December 1945',
            instruments: [
                'vocals',
            ],
            website: 'https://www.davyjones.net',
            wikipedia: 'https://en.wikipedia.org/wiki/Davy_Jones_(musician)',
            image: "https://upload.wikimedia.org/wikipedia/commons/5/52/David_Jones_1965.JPG",
        },
        {
            name: 'Michael Nesmith',
            born: '30 December 1942',
            instruments: [
                'guitar',
                'vocals',
            ],
            website: undefined,
            wikipedia: 'https://en.wikipedia.org/wiki/Michael_Nesmith',
            image: "https://vz.cnwimg.com/thumbc-300x300/wp-content/uploads/2011/03/Getty_MonkeesMikeNesmith630_022112.jpg",
        },
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