describe('Service: gpsSvc', function () {
  'use strict';
  
  var mkHttp, mkHandler, jsonRes, mkSvc;
  var $scope = {};
  
  beforeEach(module('svcGPS'));
  
  beforeEach(inject(function($http, _$httpBackend_, _gpsSvc_) {
    mkHttp = _$httpBackend_;
    mkSvc = _gpsSvc_;
    
    var mkUrl = 'http://localhost/foo/';
    var mkCoords = '37.4224764,-122.0842499';
    jsonRes = {"results":[{"address_components":[{"long_name":"Mountain View","short_name":"Mountain View","types":["locality","political"]},{"long_name":"Santa Clara County","short_name":"Santa Clara County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"Mountain View, CA, USA","geometry":{"bounds":{"northeast":{"lat":37.4508789,"lng":-122.0446721},"southwest":{"lat":37.35676,"lng":-122.117862}},"location":{"lat":37.3860517,"lng":-122.0838511},"location_type":"APPROXIMATE","viewport":{"northeast":{"lat":37.4508789,"lng":-122.0446721},"southwest":{"lat":37.35676,"lng":-122.117862}}},"place_id":"ChIJiQHsW0m3j4ARm69rRkrUF3w","types":["locality","political"]}],"status":"OK"};
    mkHandler = mkHttp.when('GET', mkUrl, {'latlng': mkCoords}).respond(jsonRes);
    
    // Mock code
    mkSvc.getLocation = function(lat, lon) {
      var _latLng = lat + ',' + lon;
      var params = { latlng: _latLng };
      
      // $http({ method:'GET', responseType: 'json', url: url, cache: 'true' })
      $http.get(mkUrl, params)
        .then(function(res) {
          $scope.res = res.data;
        }, function(err) {
          $scope.err = err.status;
      });
    }; // End -- Mock code
    
  }));
  
  afterEach(inject(function($timeout) {
    
    // Fixes the 'digest in progress' error
    $timeout(function() {
      if ($scope.res || $scope.err) {
        mkHttp.verifyNoOutstandingExpectation();
        mkHttp.verifyNoOutstandingRequest();
      }
    });
    
  }));
  
  
  it('should be invoked', function () {
    mkSvc.getLocation(37.4224764,-122.0842499);
    expect(mkHttp.flush).not.toThrow();
  });
  
  it('shoud return valid JSON data', function() {
    mkSvc.getLocation(37.4224764,-122.0842499);
    mkHttp.flush();
    expect($scope.res).toEqual(jsonRes);
    expect($scope.res.results[0].address_components[0].short_name).toBe('Mountain View');
  });
  
  it('should throw an error', function () {
    mkHandler.respond(404);
    mkSvc.getLocation(37.4224764,-122.0842499);
    mkHttp.flush();
    expect($scope.err).toBe(404);
  });
  
});
