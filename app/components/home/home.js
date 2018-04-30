(function(){
    'use strict';

    angular.module('components.home', [])
    .controller('HomeController', function(){
        var vm = this; // view model
    })
    .config(function($stateProvider){
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller: 'HomeController as hc',
            });
    });
})();