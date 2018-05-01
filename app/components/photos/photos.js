(function(){
    'use strict';

    angular.module('components.photos', [])
    .controller('PhotosController', function(){
        var vm = this; // view model
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