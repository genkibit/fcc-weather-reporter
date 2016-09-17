describe('Service: geoSvc', function () {
  'use strict';
  
  var rootScope, $q, deferred, geoSvc;

  beforeEach(module('svcGeolocation'));

  beforeEach(inject(function(_$rootScope_, _$q_, _geoSvc_) {
    rootScope = _$rootScope_;
    $q = _$q_;
    deferred = $q.defer();
    geoSvc = _geoSvc_;
  }));


  it('should resolve the promise', function() {
    var data;

    deferred.promise.then(function(value) {
      data = value;
    });

    deferred.resolve(['lat','lon']);
    rootScope.$apply();

    expect(data).toEqual(['lat','lon']);
  });

  it('should reject the promise', function() {
    var data;

    deferred.promise.catch(function(value) {
      data = value;
    });

    deferred.reject('Error');
    rootScope.$apply();

    expect(data).toEqual('Error');
  });

});
