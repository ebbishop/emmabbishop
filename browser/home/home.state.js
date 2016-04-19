'use strict';

emma.config(function ($stateProvider) {
  console.log('loading config');
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: '/home/home.template.html',
    controller: 'homeCtrl'
  });
});