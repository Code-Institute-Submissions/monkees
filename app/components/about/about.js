(function(){
    'use strict';

    angular.module('components.about', [])
    .controller('AboutController', function(Members){
        var vm = this; // view model

        vm.members = Members.all();
    })
    .config(function($stateProvider){
        $stateProvider
            .state('about',{
                url: '/about',
                templateUrl: 'components/about/about.html',
                controller: 'AboutController as ac',
            });
    });
})();