'use strict';

var emma = angular.module('emma', ['ui.router', 'duScroll'])
.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});