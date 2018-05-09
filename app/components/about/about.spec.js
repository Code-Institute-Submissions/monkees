describe('AboutController', function(){


    var $controller, AboutController, MembersFactory;

    var membersList = [
        {
            name: 'Peter tork',
        }
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