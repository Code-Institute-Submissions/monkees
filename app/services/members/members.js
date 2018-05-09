(function(){
    'use strict';

    angular.module('api.members', [])
    .factory('Members', function(){

        // Factory logic here
        var Members = {};

        var membersList = [
        {
            name: 'Peter tork',
        }
    ]

        Members.all = function(){
            return membersList;
        };

        return Members;
    });
})();