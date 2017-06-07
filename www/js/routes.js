/* rota do app*/
angular.module('salmosagora').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      cache: false,
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })

    .state('psalmgrid', {
      url: '/psalmgrid',
      templateUrl: 'templates/psalmgrid.html',
      controller: 'PsalmGridController'
    })
    
    .state('psalm', {
      url: '/psalm/:psalmId',
      cache: false,
      templateUrl: 'templates/psalm.html',
      controller: 'PsalmController'
    })

    .state('profile', {
      url: '/profile',
      cache: false,
      templateUrl: 'templates/profile.html',
      controller: 'ProfileController'
    });
});