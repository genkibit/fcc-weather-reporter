/**
 * @ngdoc overview
 * @name weatherApp
 * @description
 * # weatherApp
 * Main module of the application
 */
angular

.module('weatherApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'svcGeolocation',
  'svcGPS',
  'svcWeatherReport'
])

.config(function ($routeProvider) {
 'use strict';

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
});
