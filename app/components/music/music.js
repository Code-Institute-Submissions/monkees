(function(){
    'use strict';

    angular.module('components.music', [])
    .controller('MusicController', function(){
        var vm = this; // view model
    })
    .config(function($stateProvider){
        $stateProvider
            .state('music',{
                url: '/music',
                templateUrl: 'components/music/music.html',
                controller: 'MusicController as mc',
            });
    });
})();