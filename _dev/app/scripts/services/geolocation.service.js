'use strict';

/**
 * @ngdoc overview
 * @name svcGeolocation
 * @description
 * # svcGeolocation
 * Geolocation module
 */
angular.module('svcGeolocation',[])

/**
 * @ngdoc service
 * @name svcGeolocation.geoSvc
 * @requires $q
 * @description
 * ## geoSvc
 * Retrieves latitude and longitude data using JavaScript's Geolocation API
 */
.service('geoSvc', ['$q', function($q) {

  // Represents a task which will finish in the future
  var deferred = $q.defer();
  var sc = this;

  sc.getCoords = function() {
    return deferred.promise;
  };

  function geoSuccess(posObj) {
    var lat = posObj.coords.latitude;
    var lon = posObj.coords.longitude;
    deferred.resolve([lat, lon]);
  }

  function geoError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        deferred.reject('User denied the request for Geolocation.');
        return deferred.promise;
      case error.POSITION_UNAVAILABLE:
        deferred.reject('Location information is unavailable.');
        return deferred.promise;
      case error.TIMEOUT:
        deferred.reject('The request to get user location timed out.');
        return deferred.promise;
      case error.UNKNOWN_ERROR:
        deferred.reject('An unknown error occurred.');
        return deferred.promise;
    }
  }

  // Comment this out if you are using PhantomJS as a test browser
  /* jshint ignore:start */
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    deferred.reject('Browser does not support Geolocation');
    return deferred.promise;
  }
  /* jshint ignore:end */
}]);
