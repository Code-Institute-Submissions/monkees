describe('Music factory', function(){
    var Music;

    beforeEach(angular.mock.module('api.music'));

    beforeEach(inject(function(_Music_){
        Music = _Music_;
    }));

    it('should exist', function(){
        expect(Music).toBeDefined();
    });

    it('the all method should be defined', function(){
        expect(Music.all).toBeDefined();
    });

    it('the all method should not return none', function(){
        var musicList = Music.all();
        expect(musicList).toBeTruthy();
    });
});