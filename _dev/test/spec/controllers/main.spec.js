describe('Controller: MainCtrl Success', function () {
  'use strict';

  var MainCtrl, scope, q, deferred, geoSvc, gpsSvc, weatherSvc;

  beforeEach(module('weatherApp'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _geoSvc_, _gpsSvc_, _weatherSvc_) {
    q = _$q_;
    geoSvc = _geoSvc_;
    gpsSvc = _gpsSvc_;
    weatherSvc = _weatherSvc_;
    scope = _$rootScope_.$new();
    deferred = q.defer();

    spyOn(geoSvc, 'getCoords').and.returnValue(deferred.promise);
    spyOn(weatherSvc, 'getWeatherData').and.returnValue(deferred.promise);
    spyOn(gpsSvc, 'getLocation').and.returnValue(deferred.promise);

    MainCtrl = _$controller_('MainCtrl', {
      'scope': scope,
      'geoSvc': geoSvc,
      'gpsSvc': gpsSvc,
      'weatherSvc': weatherSvc
    });

  }));


  it('should call geoSvc and pass on the promise', function() {
    deferred.resolve('Service data');
    var data;

    deferred.promise.then(function(value) {
      data = value;
    });

    scope.$apply();
    expect(geoSvc.getCoords).toHaveBeenCalled();
    expect(data).toBe('Service data');
  });

  it('should call gpsSvc and pass on the promise', function() {
    deferred.resolve('Service data');
    var data;

    deferred.promise.then(function(value) {
      data = value;
    });

    scope.$apply();
    expect(weatherSvc.getWeatherData).toHaveBeenCalled();
    expect(data).toBe('Service data');
  });

  it('should call weatherSvc and pass on the promise', function() {
    deferred.resolve('Service data');
    var data;

    deferred.promise.then(function(value) {
      data = value;
    });

    scope.$apply();
    expect(gpsSvc.getLocation).toHaveBeenCalled();
    expect(data).toBe('Service data');
  });

  it('should throw an error', function() {
    deferred.reject('Error');
    var data;

    deferred.promise.catch(function(value) {
      data = value;
    });

    scope.$apply();

    // getCoords always called on page load and returns rejected promise
    // leading to subsequent services not called and passing to error handler
    expect(geoSvc.getCoords).toHaveBeenCalled();
    expect(gpsSvc.getLocation).not.toHaveBeenCalled();
    expect(weatherSvc.getWeatherData).not.toHaveBeenCalled();
    expect(MainCtrl.error).toBe(true);
    expect(data).toBe('Error');
  });
});
