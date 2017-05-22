Local Weather Reporter
===


Synopsis
---
This is one of a series of projects for the front-end program of **[freeCodeCamp](http://www.freecodecamp.com/)**. The goal is to build an application that shows the current weather conditions at the user's location. The APIs used are JavaScript's geolocation, **[Google Maps Geocoding](https://developers.google.com/maps/documentation/geocoding/start)** and **[The Dark Sky Forecast](https://developer.forecast.io/)**. This application runs on the **[AngularJS framework](https://angularjs.org/)**.

The project rubric is as follows:

+ Objective: Build a CodePen.io app that is functionally similar to this: http://codepen.io/FreeCodeCamp/full/bELRjV.
+ Rule #1: Don't look at the example project's code. Figure it out for yourself.
+ Rule #2: Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.
+ User Story: I can see the weather in my current location.
+ User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
+ User Story: I can push a button to toggle between Fahrenheit and Celsius.


App Link
---
Access the page **[here](http://noelnoche.github.io/fcc-weather-reporter/)**.

Testing
---
Unit tests were done on OSX 10 with **[Karma](https://karma-runner.github.io/1.0/index.html)** and **[Jasmine](http://jasmine.github.io/)**. E2E tests were run with **[Protractor](http://www.protractortest.org/#/)** installed globally and using the local Chrome driver directly.

1. Make sure you have Chrome, Firefox and Safari applications in the Applications directory and their required plugins.
2. Open Terminal and `cd` to the root app directory.
3. Run `grunt test` to run the unit tests.
4. Run `grunt serve`.
5. Open another Terminal window and run  `protractor protractor.conf.js` to run the e2e tests.


Build & Development
---
Run `grunt` for building and `grunt serve` for preview.


Notes / Issues
---
Location coordinates are hard-coded into the application so as to avoid exposing the API key. Even though it requests the user's location data, it will always show the weather data for Mountain View, CA.


Attribution
---
+ This project is generated with **[Yeoman AngularJS generator](https://github.com/yeoman/generator-angular)**
version 0.15.1
+ Background image sources:
    - http://windows.microsoft.com/en-us/windows/wallpaper
    - http://www.liberationnews.org/wp-content/uploads/2015/08/hotweather.jpg
+ Source Sans Pro font via **[Google Fonts](https://www.google.com/fonts)**


License
---
Code provided under an **[MIT license](https://github.com/noelnoche/fcc-weather-reporter/blob/gh-pages/LICENSE.md)**


Changelog
---
+  20160917 -- v1.0.0
    - Initial release.
