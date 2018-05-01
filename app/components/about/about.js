(function(){
    'use strict';

    angular.module('components.about', [])
    .controller('AboutController', function(){
        var vm = this; // view model
    })
    .config(function($stateProvider){
        $stateProvider
            .state('about',{
                url: '/about',
                templateUrl: 'components/about/about.html',
                controller: 'AboutController as ac',
            });
    });
})();