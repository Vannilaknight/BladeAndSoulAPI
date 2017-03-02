angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate', 'jsonFormatter']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main/main',
      controller: 'mainCtrl'
    })
});
