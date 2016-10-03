/* rotas da PedidaApp */

angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  })

  .state('psalmgrid', {
    url: '/psalmgrid',
    templateUrl: 'templates/psalmgrid.html',
    controller: 'PsalmGridController'
  })

});