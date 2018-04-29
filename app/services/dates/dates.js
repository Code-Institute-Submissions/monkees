(function(){
    'use strict';

    angular.module('api.dates', [])
    .factory('Dates', function(){

        // Factory logic here
        var Dates = {};

        // A hardcoded tour-dates list the Monkees actually performed
        var datesList = [
        {
            date: '16th Dec 2016',
            venue: 'Jupiters Hotel and Casino Theatre',
            city: 'Broadbeach',
            country: 'Australia'
            },
        {
            date: '15th Dec 2016',
            venue: 'Enmore Theatre',
            city: 'Newtown',
            country: 'Australia'
            },
        {
            date: '13th Dec 2016',
            venue: 'Perth Concert Hall',
            city: 'Perth',
            country: 'Australia'
            },
        ];

        // Return all hard-coded dates
        Dates.all = function(){
            return datesList;
        };

        return Dates;

    });
})();