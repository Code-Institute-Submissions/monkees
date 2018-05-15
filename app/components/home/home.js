(function(){
    'use strict';

    angular.module('components.home', [])
    .controller('HomeController', function(Facts){
        var vm = this; // view model

        vm.randomFact = Facts.randomFact(Facts.all());
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