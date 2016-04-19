'use strict';

var emma = angular.module('emma', ['ui.router'])
.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.otherwise('/');
});