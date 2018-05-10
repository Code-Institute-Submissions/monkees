(function(){
    'use strict';

    angular.module('api.members', [])
    .factory('Members', function(){

        // Factory logic here
        var Members = {};

        var membersList = [
        {
            name: 'Peter Tork',
            born: '13 February 1942',
            instruments: [
                'bass guitar',
                'vocals',
                'keyboards',
            ],
            website: 'https://www.petertork.com',
            wikipedia: 'https://en.wikipedia.org/wiki/Peter_Tork',
        },
        {
            name: 'Micky Dolenz',
            born: '8 March 1945',
            instruments: [
                'drums',
                'vocals',
            ],
            website: 'https://www.mickydolenz.com',
            wikipedia: 'https://en.wikipedia.org/wiki/Micky_Dolenz',
        },
        {
            name: 'Davy Jones',
            born: '30 December 1945',
            instruments: [
                'vocals',
            ],
            website: 'https://www.davyjones.net',
            wikipedia: 'https://en.wikipedia.org/wiki/Davy_Jones_(musician)',
        },
        {
            name: 'Michael Nesmith',
            born: '30 December 1942',
            instruments: [
                'guitar',
                'vocals',
            ],
            website: undefined,
            wikipedia: 'https://en.wikipedia.org/wiki/Peter_Tork',
        },
    ]

        Members.all = function(){
            return membersList;
        };

        return Members;
    });
})();