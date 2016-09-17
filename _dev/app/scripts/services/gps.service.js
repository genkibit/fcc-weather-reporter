/**
 * @ngdoc overview
 * @name svcGPS
 * @description
 * # svcGPS
 * Module for identifying user location based on coordinate data
 */
angular.module('svcGPS', [])

/**
 * @ngdoc service
 * @name svcGPS.gpsSvc
 * @requires $http, $q
 * @description
 * ## gpsSvc
 * Takes coordinate data and returns specific information about the location
 */
.factory('gpsSvc', ['$http', '$q', function($http, $q) {

  'use strict';

  // Mock data for posting code without exposing API key
  var jsonRes = {"results":[{"address_components":[{"long_name":"Mountain View","short_name":"Mountain View","types":["locality","political"]},{"long_name":"Santa Clara County","short_name":"Santa Clara County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"Mountain View, CA, USA","geometry":{"bounds":{"northeast":{"lat":37.4508789,"lng":-122.0446721},"southwest":{"lat":37.35676,"lng":-122.117862}},"location":{"lat":37.3860517,"lng":-122.0838511},"location_type":"APPROXIMATE","viewport":{"northeast":{"lat":37.4508789,"lng":-122.0446721},"southwest":{"lat":37.35676,"lng":-122.117862}}},"place_id":"ChIJiQHsW0m3j4ARm69rRkrUF3w","types":["locality","political"]}],"status":"OK"};

  var deferred = $q.defer();
  var gpsSvc = {

    // HTTP handler for Google Geocoding API (supply your own API key)
    // getLocation: function(lat, lon) {
    //   var endpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
    //   var _latlng = lat + ',' + lon;
    //   var _params = {
    //     latlng: _latlng,
    //     result_type: 'locality',
    //     key: '{{ API_KEY }}'
    //   };

    //   return $http.get(endpoint, { params:_params })
    //     .then(function(res) {
    //       deferred.resolve(res.data.results[0].address_components[0].short_name + ', ' + res.data.results[0].address_components[2].short_name);
    //       return deferred.promise;
    //     })
    //     .catch(function(err) {
    //         var errMsg = 'Error: @gpsSvc.getLocation  -- ' + err.status;
    //         deferred.reject(errMsg);
    //         return deferred.promise;
    //     });
    // }

    // Mock function for posting code on public sites
    getLocation: function(lat, lon) {
      deferred.resolve(jsonRes.results[0].address_components[0].short_name + ', ' + jsonRes.results[0].address_components[2].short_name);
      return deferred.promise;
    }

  };

  return gpsSvc;
}]);
