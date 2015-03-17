module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'dist/bower_components/angular/angular.js',
      'dist/bower_components/angular-route/angular-route.js',
      'dist/bower_components/angular-mocks/angular-mocks.js',
      'dist/bower_components/jquery/dist/jquery.js',
      'dist/assets/js/app.js',
      'dist/assets/js/vendor/*.js',
      'app/**/*test.js',

    ],

    autoWatch : true,

      frameworks: ['jasmine-jquery','jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-jasmine-jquery',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
