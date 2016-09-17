/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')

.controller('MainCtrl', ['$q', '$log', 'geoSvc', 'gpsSvc', 'weatherSvc', function ($q, $log, geoSvc, gpsSvc, weatherSvc) {
 
 'use strict'; 

  var vm = this;

  // For page load indicator
  vm.loader = 'loader-on';
  
  // Keeps track of unit symbol when switching units
  vm.unitsA = 'F';
  vm.unitsB = 'C';
  
  // Handler for switching temperature units
  vm.changeUnits = function() {
    
    if (vm.unitsA === 'C') {
      vm.unitsA = 'F';
      vm.unitsB = 'C';
    } 
    else {
      vm.unitsA = 'C';
      vm.unitsB = 'F';       
    }
    
    vm.temp = weatherSvc.convertTemperature(vm.temp, vm.unitsB);     
    weatherSvc.weatherBg(vm.temp, vm.unitsA);
  };
  
  // Load coordinate data and start the api call chain
  geoSvc.getCoords()
  .then(function(res) {
    var lat = res[0];
    var lon = res[1];
          
    $q.all([gpsSvc.getLocation(lat, lon), weatherSvc.getWeatherData(lat, lon)])
      .then(function(res) {
        vm.location = res[0];
        vm.temp = Math.floor(res[1][0]);
        weatherSvc.weatherBg(vm.temp, vm.unitsA);
        vm.icon = weatherSvc.icon[res[1][1]] + ' pe-5x pe-va' || weatherSvc.icon['default'] + ' pe-5x pe-va';
        vm.windStr = weatherSvc.windStrength(res[1][2]);
        vm.windDir = weatherSvc.windDirection(res[1][3]);
        vm.loader = 'loader-off';
      })
      .catch(function(err) {
        vm.error = true;
        $log.error(err);
      });
  })
  .catch(function(err) {
    vm.error = true;
    $log.error(err);
  });

}]);
