describe('AboutController', function(){


    var $controller, AboutController, MembersFactory;

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

    // Setup
    // Specify the modules used in this test file
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.about'))

    // Add the members service
    beforeEach(angular.mock.module('api.members'));

    // Inject dependencies as set to local variables
    beforeEach(inject(function(_$controller_, _Members_){
        $controller = _$controller_;
        MembersFactory = _Members_;

        // Add a spy to the all method of the dates factory
        // Chain with the callFake method to supply our own return value, datesList
        spyOn(MembersFactory, 'all').and.callFake(function(){
            return membersList;
        });

        // Create instance of AboutController and set to namesake variable
        AboutController = $controller('AboutController', {});
    }));

    // Tests
    it('should be defined', function(){
        expect(AboutController).toBeDefined();
    });

    it('should initialize with a call to Members.all()', function(){
        // Using the spy we declared above, check a call to the all method is made
        expect(MembersFactory.all).toHaveBeenCalled();
        // Check the controllers view-model property members will be set to the membersList above
        expect(AboutController.members).toEqual(membersList);
    });
});