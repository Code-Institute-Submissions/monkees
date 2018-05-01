(function(){
    'use strict';

    angular.module('components.contact', [])
    .controller('ContactController', function($state){
        var vm = this; // view model

        vm.formSubmit = function(){
            if(vm.contactForm.$valid){
                alert("Your form has been sent successfully!");
                $state.go('home');
            };
        };

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