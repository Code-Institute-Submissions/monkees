describe('Photos factory', function(){
    var Photos;

    beforeEach(angular.mock.module('api.photos'));

    beforeEach(inject(function(_Photos_){
        Photos = _Photos_;
    }));

    it('should exist', function(){
        expect(Photos).toBeDefined();
    });

    it('the all method should be defined', function(){
        expect(Photos.all).toBeDefined();
    });

    it('the all method should not return none', function(){
        var photosList = Photos.all();
        expect(photosList).toBeTruthy();
    });
});