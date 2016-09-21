/**
 * @ngdoc overview
 * @name svcGPS
 * @description
 * # svcGPS
 * Module for identifying user location based on coordinate data
 */
angular.module('svcWeatherReport', [])

/**
 * @ngdoc service
 * @name svcWeatherReport.weatherSvc
 * @requires $rootScope, $http, $q
 * @description
 * #weatherSvc
 * Makes API calls to Dark Sky Forecast and sends formatted results to the controller
 */
.factory('weatherSvc', ['$rootScope', '$http', '$q', function($rootScope, $http, $q) {
  
  'use strict';
  
  // Mock data for posting code without exposing API key
  var jsonRes = {"latitude":37.4224764,"longitude":-122.0842499,"timezone":"America/Los_Angeles","offset":-7,"currently":{"time":1466468172,"summary":"Clear","icon":"clear-day","nearestStormDistance":255,"nearestStormBearing":351,"precipIntensity":0,"precipProbability":0,"temperature":80.48,"apparentTemperature":80.06,"dewPoint":52.19,"humidity":0.38,"windSpeed":6.91,"windBearing":319,"visibility":10,"cloudCover":0.04,"pressure":1016.83,"ozone":290.26},"minutely":{"summary":"Clear for the hour.","icon":"clear-day","data":[{"time":1466468160,"precipIntensity":0,"precipProbability":0},{"time":1466468220,"precipIntensity":0,"precipProbability":0},{"time":1466468280,"precipIntensity":0,"precipProbability":0},{"time":1466468340,"precipIntensity":0,"precipProbability":0},{"time":1466468400,"precipIntensity":0,"precipProbability":0},{"time":1466468460,"precipIntensity":0,"precipProbability":0},{"time":1466468520,"precipIntensity":0,"precipProbability":0},{"time":1466468580,"precipIntensity":0,"precipProbability":0},{"time":1466468640,"precipIntensity":0,"precipProbability":0},{"time":1466468700,"precipIntensity":0,"precipProbability":0},{"time":1466468760,"precipIntensity":0,"precipProbability":0},{"time":1466468820,"precipIntensity":0,"precipProbability":0},{"time":1466468880,"precipIntensity":0,"precipProbability":0},{"time":1466468940,"precipIntensity":0,"precipProbability":0},{"time":1466469000,"precipIntensity":0,"precipProbability":0},{"time":1466469060,"precipIntensity":0,"precipProbability":0},{"time":1466469120,"precipIntensity":0,"precipProbability":0},{"time":1466469180,"precipIntensity":0,"precipProbability":0},{"time":1466469240,"precipIntensity":0,"precipProbability":0},{"time":1466469300,"precipIntensity":0,"precipProbability":0},{"time":1466469360,"precipIntensity":0,"precipProbability":0},{"time":1466469420,"precipIntensity":0,"precipProbability":0},{"time":1466469480,"precipIntensity":0,"precipProbability":0},{"time":1466469540,"precipIntensity":0,"precipProbability":0},{"time":1466469600,"precipIntensity":0,"precipProbability":0},{"time":1466469660,"precipIntensity":0,"precipProbability":0},{"time":1466469720,"precipIntensity":0,"precipProbability":0},{"time":1466469780,"precipIntensity":0,"precipProbability":0},{"time":1466469840,"precipIntensity":0,"precipProbability":0},{"time":1466469900,"precipIntensity":0,"precipProbability":0},{"time":1466469960,"precipIntensity":0,"precipProbability":0},{"time":1466470020,"precipIntensity":0,"precipProbability":0},{"time":1466470080,"precipIntensity":0,"precipProbability":0},{"time":1466470140,"precipIntensity":0,"precipProbability":0},{"time":1466470200,"precipIntensity":0,"precipProbability":0},{"time":1466470260,"precipIntensity":0,"precipProbability":0},{"time":1466470320,"precipIntensity":0,"precipProbability":0},{"time":1466470380,"precipIntensity":0,"precipProbability":0},{"time":1466470440,"precipIntensity":0,"precipProbability":0},{"time":1466470500,"precipIntensity":0,"precipProbability":0},{"time":1466470560,"precipIntensity":0,"precipProbability":0},{"time":1466470620,"precipIntensity":0,"precipProbability":0},{"time":1466470680,"precipIntensity":0,"precipProbability":0},{"time":1466470740,"precipIntensity":0,"precipProbability":0},{"time":1466470800,"precipIntensity":0,"precipProbability":0},{"time":1466470860,"precipIntensity":0,"precipProbability":0},{"time":1466470920,"precipIntensity":0,"precipProbability":0},{"time":1466470980,"precipIntensity":0,"precipProbability":0},{"time":1466471040,"precipIntensity":0,"precipProbability":0},{"time":1466471100,"precipIntensity":0,"precipProbability":0},{"time":1466471160,"precipIntensity":0,"precipProbability":0},{"time":1466471220,"precipIntensity":0,"precipProbability":0},{"time":1466471280,"precipIntensity":0,"precipProbability":0},{"time":1466471340,"precipIntensity":0,"precipProbability":0},{"time":1466471400,"precipIntensity":0,"precipProbability":0},{"time":1466471460,"precipIntensity":0,"precipProbability":0},{"time":1466471520,"precipIntensity":0,"precipProbability":0},{"time":1466471580,"precipIntensity":0,"precipProbability":0},{"time":1466471640,"precipIntensity":0,"precipProbability":0},{"time":1466471700,"precipIntensity":0,"precipProbability":0},{"time":1466471760,"precipIntensity":0,"precipProbability":0}]},"hourly":{"summary":"Partly cloudy tomorrow morning.","icon":"partly-cloudy-day","data":[{"time":1466467200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":81.61,"apparentTemperature":80.77,"dewPoint":52.35,"humidity":0.36,"windSpeed":6.5,"windBearing":320,"visibility":10,"cloudCover":0.02,"pressure":1016.86,"ozone":290.28},{"time":1466470800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":77.44,"apparentTemperature":77.44,"dewPoint":51.62,"humidity":0.41,"windSpeed":8.02,"windBearing":318,"visibility":10,"cloudCover":0.09,"pressure":1016.75,"ozone":290.19},{"time":1466474400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":74.57,"apparentTemperature":74.57,"dewPoint":52.35,"humidity":0.46,"windSpeed":8.64,"windBearing":314,"visibility":10,"cloudCover":0.17,"pressure":1016.69,"ozone":290.12},{"time":1466478000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":70.66,"apparentTemperature":70.66,"dewPoint":52.5,"humidity":0.53,"windSpeed":8.18,"windBearing":314,"visibility":10,"cloudCover":0.21,"pressure":1016.74,"ozone":290.05},{"time":1466481600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":67.49,"apparentTemperature":67.49,"dewPoint":52.37,"humidity":0.58,"windSpeed":6.63,"windBearing":312,"visibility":10,"cloudCover":0.21,"pressure":1016.93,"ozone":289.98},{"time":1466485200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":64.91,"apparentTemperature":64.91,"dewPoint":51.93,"humidity":0.63,"windSpeed":5.29,"windBearing":307,"visibility":9.93,"cloudCover":0.16,"pressure":1017.21,"ozone":289.89},{"time":1466488800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":61.67,"apparentTemperature":61.67,"dewPoint":50.78,"humidity":0.67,"windSpeed":4.24,"windBearing":304,"visibility":9.89,"cloudCover":0.12,"pressure":1017.42,"ozone":289.69},{"time":1466492400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":60.79,"apparentTemperature":60.79,"dewPoint":50.79,"humidity":0.7,"windSpeed":3.68,"windBearing":301,"visibility":9.89,"cloudCover":0.12,"pressure":1017.5,"ozone":289.33},{"time":1466496000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":59.91,"apparentTemperature":59.91,"dewPoint":50.46,"humidity":0.71,"windSpeed":3.49,"windBearing":296,"visibility":9.85,"cloudCover":0.12,"pressure":1017.51,"ozone":288.86},{"time":1466499600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":59,"apparentTemperature":59,"dewPoint":50.08,"humidity":0.72,"windSpeed":3.4,"windBearing":292,"visibility":9.78,"cloudCover":0.13,"pressure":1017.45,"ozone":288.36},{"time":1466503200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":58.19,"apparentTemperature":58.19,"dewPoint":49.85,"humidity":0.74,"windSpeed":3.18,"windBearing":289,"visibility":9.74,"cloudCover":0.14,"pressure":1017.3,"ozone":287.83},{"time":1466506800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":57.01,"apparentTemperature":57.01,"dewPoint":48.92,"humidity":0.74,"windSpeed":2.59,"windBearing":295,"visibility":9.74,"cloudCover":0.17,"pressure":1017.09,"ozone":287.26},{"time":1466510400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":56.54,"apparentTemperature":56.54,"dewPoint":48.49,"humidity":0.74,"windSpeed":2.48,"windBearing":298,"visibility":9.78,"cloudCover":0.21,"pressure":1016.95,"ozone":286.76},{"time":1466514000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":57.77,"apparentTemperature":57.77,"dewPoint":49.3,"humidity":0.73,"windSpeed":2.21,"windBearing":289,"visibility":9.82,"cloudCover":0.33,"pressure":1016.94,"ozone":286.45},{"time":1466517600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":60.75,"apparentTemperature":60.75,"dewPoint":51.22,"humidity":0.71,"windSpeed":2.59,"windBearing":297,"visibility":9.93,"cloudCover":0.36,"pressure":1016.98,"ozone":286.21},{"time":1466521200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":64.49,"apparentTemperature":64.49,"dewPoint":52.83,"humidity":0.66,"windSpeed":3.51,"windBearing":307,"visibility":10,"cloudCover":0.35,"pressure":1016.98,"ozone":285.76},{"time":1466524800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":68.04,"apparentTemperature":68.04,"dewPoint":53.16,"humidity":0.59,"windSpeed":4.45,"windBearing":314,"visibility":10,"cloudCover":0.27,"pressure":1016.91,"ozone":284.85},{"time":1466528400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":70.71,"apparentTemperature":70.71,"dewPoint":54.41,"humidity":0.56,"windSpeed":5.38,"windBearing":320,"visibility":10,"cloudCover":0.13,"pressure":1016.79,"ozone":283.72},{"time":1466532000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":73.16,"apparentTemperature":73.16,"dewPoint":54.71,"humidity":0.52,"windSpeed":6.2,"windBearing":321,"visibility":10,"cloudCover":0.07,"pressure":1016.59,"ozone":282.81},{"time":1466535600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":77.26,"apparentTemperature":77.26,"dewPoint":55.89,"humidity":0.48,"windSpeed":6.98,"windBearing":320,"visibility":10,"cloudCover":0.06,"pressure":1016.26,"ozone":282.29},{"time":1466539200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":81.04,"apparentTemperature":81.19,"dewPoint":57.6,"humidity":0.45,"windSpeed":8.04,"windBearing":318,"visibility":10,"cloudCover":0.06,"pressure":1015.85,"ozone":281.99},{"time":1466542800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":84.67,"apparentTemperature":84.44,"dewPoint":59.39,"humidity":0.43,"windSpeed":8.97,"windBearing":316,"visibility":10,"cloudCover":0.05,"pressure":1015.44,"ozone":281.81},{"time":1466546400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":86.23,"apparentTemperature":86.25,"dewPoint":60.7,"humidity":0.42,"windSpeed":9.61,"windBearing":312,"visibility":10,"cloudCover":0.06,"pressure":1015.05,"ozone":281.77},{"time":1466550000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":84.52,"apparentTemperature":84.4,"dewPoint":59.71,"humidity":0.43,"windSpeed":9.89,"windBearing":309,"visibility":10,"cloudCover":0.07,"pressure":1014.69,"ozone":281.85},{"time":1466553600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":82.16,"apparentTemperature":82.26,"dewPoint":58.84,"humidity":0.45,"windSpeed":10.38,"windBearing":301,"visibility":10,"cloudCover":0.1,"pressure":1014.42,"ozone":281.86},{"time":1466557200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":78.27,"apparentTemperature":78.27,"dewPoint":57.78,"humidity":0.49,"windSpeed":10.06,"windBearing":297,"visibility":10,"cloudCover":0.11,"pressure":1014.23,"ozone":281.7},{"time":1466560800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":73.57,"apparentTemperature":73.57,"dewPoint":56.67,"humidity":0.56,"windSpeed":9.19,"windBearing":292,"visibility":10,"cloudCover":0.11,"pressure":1014.12,"ozone":281.48},{"time":1466564400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":69.14,"apparentTemperature":69.14,"dewPoint":55.54,"humidity":0.62,"windSpeed":8.14,"windBearing":288,"visibility":10,"cloudCover":0.12,"pressure":1014.13,"ozone":281.3},{"time":1466568000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":65.38,"apparentTemperature":65.38,"dewPoint":54.7,"humidity":0.68,"windSpeed":6.94,"windBearing":285,"visibility":9.98,"cloudCover":0.15,"pressure":1014.37,"ozone":281.21},{"time":1466571600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":62.25,"apparentTemperature":62.25,"dewPoint":54.25,"humidity":0.75,"windSpeed":6.12,"windBearing":278,"visibility":9.96,"cloudCover":0.19,"pressure":1014.73,"ozone":281.17},{"time":1466575200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":60.13,"apparentTemperature":60.13,"dewPoint":53.9,"humidity":0.8,"windSpeed":5.37,"windBearing":273,"visibility":9.94,"cloudCover":0.23,"pressure":1014.97,"ozone":281.15},{"time":1466578800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":59.12,"apparentTemperature":59.12,"dewPoint":53.78,"humidity":0.82,"windSpeed":5.16,"windBearing":270,"visibility":9.91,"cloudCover":0.24,"pressure":1014.85,"ozone":281.07},{"time":1466582400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":58.72,"apparentTemperature":58.72,"dewPoint":53.81,"humidity":0.84,"windSpeed":5.23,"windBearing":269,"visibility":9.88,"cloudCover":0.24,"pressure":1014.56,"ozone":281.02},{"time":1466586000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":58.36,"apparentTemperature":58.36,"dewPoint":53.82,"humidity":0.85,"windSpeed":5.26,"windBearing":269,"visibility":9.86,"cloudCover":0.28,"pressure":1014.29,"ozone":281.18},{"time":1466589600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":57.75,"apparentTemperature":57.75,"dewPoint":53.73,"humidity":0.86,"windSpeed":5.15,"windBearing":268,"visibility":9.85,"cloudCover":0.38,"pressure":1014.08,"ozone":281.59},{"time":1466593200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0012,"precipProbability":0.02,"precipType":"rain","temperature":57.06,"apparentTemperature":57.06,"dewPoint":53.45,"humidity":0.88,"windSpeed":5.01,"windBearing":268,"visibility":9.84,"cloudCover":0.52,"pressure":1013.88,"ozone":282.22},{"time":1466596800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0017,"precipProbability":0.04,"precipType":"rain","temperature":56.56,"apparentTemperature":56.56,"dewPoint":53.02,"humidity":0.88,"windSpeed":4.92,"windBearing":269,"visibility":9.85,"cloudCover":0.62,"pressure":1013.78,"ozone":283.21},{"time":1466600400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0017,"precipProbability":0.04,"precipType":"rain","temperature":57.75,"apparentTemperature":57.75,"dewPoint":53.83,"humidity":0.87,"windSpeed":4.88,"windBearing":268,"visibility":9.89,"cloudCover":0.66,"pressure":1013.82,"ozone":284.95},{"time":1466604000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0014,"precipProbability":0.03,"precipType":"rain","temperature":58.77,"apparentTemperature":58.77,"dewPoint":54.1,"humidity":0.84,"windSpeed":4.94,"windBearing":268,"visibility":9.95,"cloudCover":0.67,"pressure":1013.97,"ozone":287.04},{"time":1466607600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0011,"precipProbability":0.02,"precipType":"rain","temperature":60.41,"apparentTemperature":60.41,"dewPoint":54.46,"humidity":0.81,"windSpeed":5.2,"windBearing":270,"visibility":10,"cloudCover":0.63,"pressure":1014.13,"ozone":288.5},{"time":1466611200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":63.27,"apparentTemperature":63.27,"dewPoint":55.1,"humidity":0.75,"windSpeed":5.39,"windBearing":274,"visibility":10,"cloudCover":0.5,"pressure":1014.23,"ozone":288.75},{"time":1466614800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.1,"apparentTemperature":67.1,"dewPoint":55.92,"humidity":0.67,"windSpeed":5.66,"windBearing":280,"visibility":10,"cloudCover":0.33,"pressure":1014.28,"ozone":288.36},{"time":1466618400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":70.93,"apparentTemperature":70.93,"dewPoint":56.78,"humidity":0.61,"windSpeed":6.24,"windBearing":284,"visibility":10,"cloudCover":0.19,"pressure":1014.26,"ozone":288.1},{"time":1466622000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":74.45,"apparentTemperature":74.45,"dewPoint":57.8,"humidity":0.56,"windSpeed":7.49,"windBearing":286,"visibility":10,"cloudCover":0.12,"pressure":1014.18,"ozone":288.18},{"time":1466625600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":78.07,"apparentTemperature":78.07,"dewPoint":59.12,"humidity":0.52,"windSpeed":9.01,"windBearing":288,"visibility":10,"cloudCover":0.07,"pressure":1014.03,"ozone":288.39},{"time":1466629200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":81.04,"apparentTemperature":81.72,"dewPoint":60.39,"humidity":0.5,"windSpeed":10.2,"windBearing":288,"visibility":10,"cloudCover":0.03,"pressure":1013.82,"ozone":288.82},{"time":1466632800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":82.49,"apparentTemperature":83.05,"dewPoint":61.02,"humidity":0.48,"windSpeed":10.97,"windBearing":289,"visibility":10,"cloudCover":0.02,"pressure":1013.51,"ozone":289.58},{"time":1466636400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":81.47,"apparentTemperature":82.01,"dewPoint":60.15,"humidity":0.48,"windSpeed":11.39,"windBearing":289,"visibility":10,"cloudCover":0.02,"pressure":1013.21,"ozone":290.55},{"time":1466640000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":79.21,"apparentTemperature":79.21,"dewPoint":58.89,"humidity":0.5,"windSpeed":11.42,"windBearing":288,"visibility":10,"cloudCover":0.03,"pressure":1013.04,"ozone":291.53}]},"daily":{"summary":"No precipitation throughout the week, with temperatures bottoming out at 78°F on Thursday.","icon":"clear-day","data":[{"time":1466406000,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1466426937,"sunsetTime":1466480021,"moonPhase":0.52,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":54.32,"temperatureMinTime":1466424000,"temperatureMax":82.07,"temperatureMaxTime":1466463600,"apparentTemperatureMin":54.32,"apparentTemperatureMinTime":1466424000,"apparentTemperatureMax":80.94,"apparentTemperatureMaxTime":1466463600,"dewPoint":50.25,"humidity":0.56,"windSpeed":5.07,"windBearing":319,"visibility":9.79,"cloudCover":0.06,"pressure":1017.38,"ozone":291.2},{"time":1466492400,"summary":"Partly cloudy in the morning.","icon":"partly-cloudy-day","sunriseTime":1466513349,"sunsetTime":1466566433,"moonPhase":0.54,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":56.54,"temperatureMinTime":1466510400,"temperatureMax":86.23,"temperatureMaxTime":1466546400,"apparentTemperatureMin":56.54,"apparentTemperatureMinTime":1466510400,"apparentTemperatureMax":86.25,"apparentTemperatureMaxTime":1466546400,"dewPoint":54.13,"humidity":0.61,"windSpeed":5.78,"windBearing":302,"visibility":9.93,"cloudCover":0.15,"pressure":1015.97,"ozone":284.07},{"time":1466578800,"summary":"Partly cloudy in the morning.","icon":"partly-cloudy-day","sunriseTime":1466599763,"sunsetTime":1466652843,"moonPhase":0.57,"precipIntensity":0.0004,"precipIntensityMax":0.0017,"precipIntensityMaxTime":1466596800,"precipProbability":0.04,"precipType":"rain","temperatureMin":56.56,"temperatureMinTime":1466596800,"temperatureMax":82.49,"temperatureMaxTime":1466632800,"apparentTemperatureMin":56.56,"apparentTemperatureMinTime":1466596800,"apparentTemperatureMax":83.05,"apparentTemperatureMaxTime":1466632800,"dewPoint":55.58,"humidity":0.69,"windSpeed":7.27,"windBearing":281,"visibility":9.96,"cloudCover":0.23,"pressure":1013.92,"ozone":288.46},{"time":1466665200,"summary":"Partly cloudy starting in the evening.","icon":"partly-cloudy-night","sunriseTime":1466686179,"sunsetTime":1466739252,"moonPhase":0.61,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":56.06,"temperatureMinTime":1466679600,"temperatureMax":77.78,"temperatureMaxTime":1466715600,"apparentTemperatureMin":56.06,"apparentTemperatureMinTime":1466679600,"apparentTemperatureMax":77.78,"apparentTemperatureMaxTime":1466715600,"dewPoint":54.51,"humidity":0.7,"windSpeed":9.26,"windBearing":292,"visibility":10,"cloudCover":0.18,"pressure":1016.4,"ozone":300.59},{"time":1466751600,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1466772596,"sunsetTime":1466825658,"moonPhase":0.64,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":58.07,"temperatureMinTime":1466769600,"temperatureMax":90.22,"temperatureMaxTime":1466805600,"apparentTemperatureMin":58.07,"apparentTemperatureMinTime":1466769600,"apparentTemperatureMax":88.21,"apparentTemperatureMaxTime":1466805600,"dewPoint":53.51,"humidity":0.57,"windSpeed":5.98,"windBearing":282,"cloudCover":0.04,"pressure":1016.1,"ozone":304.79},{"time":1466838000,"summary":"Dry throughout the day.","icon":"clear-day","sunriseTime":1466859014,"sunsetTime":1466912064,"moonPhase":0.68,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":57.52,"temperatureMinTime":1466856000,"temperatureMax":93.82,"temperatureMaxTime":1466892000,"apparentTemperatureMin":57.52,"apparentTemperatureMinTime":1466856000,"apparentTemperatureMax":91.1,"apparentTemperatureMaxTime":1466892000,"dewPoint":51.78,"humidity":0.49,"windSpeed":4.94,"windBearing":289,"cloudCover":0,"pressure":1012.72,"ozone":297.33},{"time":1466924400,"summary":"Dry throughout the day.","icon":"clear-day","sunriseTime":1466945434,"sunsetTime":1466998467,"moonPhase":0.72,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":60.76,"temperatureMinTime":1466942400,"temperatureMax":92.49,"temperatureMaxTime":1466978400,"apparentTemperatureMin":60.76,"apparentTemperatureMinTime":1466942400,"apparentTemperatureMax":90.07,"apparentTemperatureMaxTime":1466978400,"dewPoint":52.98,"humidity":0.49,"windSpeed":5.83,"windBearing":264,"cloudCover":0.02,"pressure":1012.9,"ozone":289.77},{"time":1467010800,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1467031856,"sunsetTime":1467084869,"moonPhase":0.75,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":58.97,"temperatureMinTime":1467028800,"temperatureMax":90.43,"temperatureMaxTime":1467064800,"apparentTemperatureMin":58.97,"apparentTemperatureMinTime":1467028800,"apparentTemperatureMax":88.78,"apparentTemperatureMaxTime":1467064800,"dewPoint":55.29,"humidity":0.57,"windSpeed":5.41,"windBearing":255,"cloudCover":0,"pressure":1013.66,"ozone":289.92}]},"flags":{"sources":["darksky","lamp","gfs","cmc","nam","rap","rtma","sref","fnmoc","isd","nwspa","madis","nearest-precip"],"darksky-stations":["KMUX"],"lamp-stations":["KCCR","KHWD","KLVK","KNUQ","KOAK","KPAO","KRHV","KSFO","KSJC","KSQL","KWVI"],"isd-stations":["724937-23289","724937-99999","745090-23244","994041-99999","999999-23244"],"madis-stations":["AP990","AU836","C2978","C6623","C7418","C8983","C9786","D1967","D1978","E0597","E2932","E5215","E7138","KNUQ","KPAO","LOAC1"],"units":"us"}};
  var rootScope = $rootScope;
  var deferred = $q.defer();
  var weatherSvc = {

    // Weather icon table
    icon: {
      'clear-day':'pe-is-w-sun-1',
      'clear-night':'pe-is-w-moon-1',
      'rain':'pe-is-w-rain-1',
      'snow':'pe-is-w-snow',
      'sleet':'pe-is-w-rain-and-snow',
      'wind':'pe-is-w-wind',
      'fog':'pe-is-w-fog-1',
      'cloudy':'pe-is-w-mostly-cloudy-2',
      'partly-cloudy-day':'pe-is-w-partly-cloudy-1',
      'partly-cloudy-night':'pe-is-w-partly-cloudy-3',
      'hail':'pe-is-w-hail-2',
      'thunderstorm':'pe-is-w-severe-thunderstorm',
      'tornado':'pe-is-w-tornado-1',
      'default': 'pe-is-w-eclipse-1'
    },

    // Calls Dark Sky Forcast API service (supply your own API key)
    // getWeatherData: function(lat, lon) {
    //   var endpoint = 'https://api.forecast.net/forecast/{ API_KEY }/' + lat + ',' + lon + '?callback=JSON_CALLBACK';

    //   // Using promise chaining
    //   return $http.jsonp(endpoint)
    //     .then(function(res) {
    //       var temp = res.data.currently.apparentTemperature;
    //       var icon = res.data.currently.icon;
    //       var windSpeed = res.data.currently.windSpeed;
    //       var windDir = res.data.currently.windBearing || '';

    //       deferred.resolve([temp, icon, windSpeed, windDir]);
    //       return deferred.promise;
    //     })
    //     .catch(function(err) {
    //       var errMsg = 'Error: @weatherSvc.getWeatherData -- ' + err.status;
    //       deferred.reject(errMsg);
    //       return deferred.promise;
    //     });
    // },

    // Mock function for posting code on public sites
    getWeatherData: function(lat, lon) {
      var temp = jsonRes.currently.apparentTemperature;
      var icon = jsonRes.currently.icon;
      var windSpeed = jsonRes.currently.windSpeed;
      var windDir = jsonRes.currently.windBearing || '';

      deferred.resolve([temp, icon, windSpeed, windDir]);
      return deferred.promise;
    },

    // Returns wind strength based on Beaufort scale
    windStrength: function(mph) {
      var strValues = [3, 7, 12, 18, 24, 31, 38, 46, 54, 63, 72];
      var strTable = {
        3:'Light air',
        7:'Light breeze',
        12:'Gentle breeze',
        18:'Moderate breeze',
        24:'Fresh breeze',
        31:'Strong breeze',
        38:'Near gale',
        46:'Full gale',
        54:'Strong gale',
        63:'Storm',
        72:'Violent Storm'
      };

      for (var i = 0; i < strValues.length; i++) {
        if (mph > 72) {
          return 'Hurricane';
        }
        else if (mph <= 1) {
          return 'Calm';
        }
        else if (mph > 1 && mph <= strValues[i]) {
          var key = strValues[i];
          return strTable[key];
        }
        else {
          continue;
        }
      }
    },

    // With 0 degress being true north according Dark Weather Forecast
    windDirection: function(deg) {

      if (deg > 330 && deg <= 30) {
        return 'N';
      }
      else if (deg > 30 && deg <= 60) {
        return 'NE';
      }
      else if (deg > 60 && deg <= 120) {
        return 'E';
      }
      else if (deg > 120 && deg <= 150) {
        return 'SE';
      }
      else if (deg > 150 && deg <= 210) {
        return 'S';
      }
      else if (deg > 210 && deg <= 240) {
        return 'SW';
      }
      else if (deg > 240 && deg <= 300) {
        return 'W';
      }
      else if (deg > 300 && deg <= 330) {
        return 'NW';
      }
      else {
        return '*';
      }
    },

    // Converts temperature from F to C and vice versa
    convertTemperature: function(temp, curUnits) {
      if (curUnits === 'C') {
        temp = Math.round(temp * 9 / 5 + 32);
      } else {
        temp = Math.round((temp - 32) * 5 / 9);
      }
      return temp;
    },

    // Changes background image depending on temperature range
    weatherBg: function(temp, units) {

      if (units === 'F') {
        if (temp <= 50) {
          rootScope.bgImg = 'bg bg-cold';
        }
        else if (temp > 50 && temp < 86) {
          rootScope.bgImg = 'bg bg-clear';
        }
        else {
          rootScope.bgImg = 'bg bg-hot';
        }
      }
      else {
        if (temp <= 0) {
          rootScope.bgImg = 'bg bg-cold';
        }
        else if (temp >= 10 && temp < 30) {
          rootScope.bgImg = 'bg bg-clear';
        }
        else {
          rootScope.bgImg = 'bg bg-hot';
        }
      }
    }
  };

  return weatherSvc;
}]);
