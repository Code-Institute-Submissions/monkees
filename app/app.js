(function() {
  'use strict';

  angular.module('monkees', [
    'ui.router',
    'api.dates',
    'components.dates',
    'components.home',
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();