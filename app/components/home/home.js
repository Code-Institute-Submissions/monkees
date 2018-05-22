(function(){
    'use strict';

    angular.module('components.home', [])
    .controller('HomeController', function(
        Facts, Dates, Music, Photos
    ){
        var vm = this; // view model

        vm.randomFact = Facts.randomFact(Facts.all());
        vm.dates = Dates.all();
        vm.song = Music.all()[0];
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