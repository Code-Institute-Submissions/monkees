(function(){
    'use strict';

    angular.module('components.dates', [])
    .controller('DatesController', function(Dates){
        var vm = this; // view model

        vm.dates = Dates.all();
    })
    .config(function($stateProvider){
        $stateProvider
            .state('dates',{
                url: '/dates',
                templateUrl: 'components/dates/dates.html',
                controller: 'DatesController as dc',
            });
    });
})();