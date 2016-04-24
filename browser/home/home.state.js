'use strict';

emma.config(function ($stateProvider) {
  console.log('loading config');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/home/home.template.html',
    controller: 'homeCtrl'
  });
});