'use strict';

var emma = angular.module('emma', ['ui.router'])
.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.otherwise('/');
});

emma.run(function($rootScope, $window){
  $rootScope.$on('$stateChangeStart', function(ev, toState){
    if(toState.external){
      ev.preventDefault();
      $window.open(toState.url, '_blank');
    }
  });
});