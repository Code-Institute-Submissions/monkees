(function(){
    'use strict';

    angular.module('api.facts', [])
    .factory('Facts', function(){

        // Factory logic here
        var Facts = {};

        // Some facts about the Monkees
        var factsList = [
            'Only Peter and Micky appear in every episode of the TV show',
            'Davy was almost drafted by the army',
            '400 hundred musicians and actors auditioned for the Monkees TV show',
            'Micky and Michael both auditioned to play the Fonz on Happy Days',
        ];

        // Return all facts
        Facts.all = function(){
            return factsList;
        };

        return Facts;

    });
})();