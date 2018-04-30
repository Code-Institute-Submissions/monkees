(function() {
  'use strict';

  angular.module('monkees', [
    'ui.router',
    'api.dates',
    'components.dates',
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();