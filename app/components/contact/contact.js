(function(){
    'use strict';

    angular.module('components.contact', [])
    .controller('ContactController', function(){
        var vm = this; // view model
    })
    .config(function($stateProvider){
        $stateProvider
            .state('contact',{
                url: '/contact',
                templateUrl: 'components/contact/contact.html',
                controller: 'ContactController as cc',
            });
    });
})();