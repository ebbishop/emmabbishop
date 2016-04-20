'use strict';

emma.config(function ($stateProvider) {
  $stateProvider.state('projects', {
    url: 'https://github.com/ebbishop?tab=repositories',
    external: true
    // url: '/projects',
    // templateUrl: '/projects/projects.template.html'
  })
})