(function() {
  'use strict';

  angular.module('monkees', [
    'ui.router',
    'api.dates',
    'components.dates',
    'components.home',
    'components.music',
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();