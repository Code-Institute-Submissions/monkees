(function(){
    'use strict';

    angular.module('components.photos', [])
    .controller('PhotosController', function(Photos){
        var vm = this; // view model

        vm.photos = Photos.all();
    })
    .config(function($stateProvider){
        $stateProvider
            .state('photos',{
                url: '/photos',
                templateUrl: 'components/photos/photos.html',
                controller: 'PhotosController as pc',
            });
    });
})();