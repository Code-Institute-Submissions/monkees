// Karma configuration
// Generated on Sat Apr 28 2018 18:29:11 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      
        // angular dependencies
        './node_modules/angular/angular.js',
        './node_modules/angular-ui-router/release/angular-ui-router.js',
        './node_modules/angular-mocks/angular-mocks.js',

        // angular-app files
        './app/services/dates/dates.js',
        './app/services/facts/facts.js',
        './app/services/members/members.js',
        './app/components/dates/dates.js',
        './app/components/home/home.js',
        './app/components/music/music.js',
        './app/components/contact/contact.js',
        './app/components/about/about.js',
        './app/components/photos/photos.js',
        './app/app.js',

        // angular-spec files
        './app/components/home/home.spec.js',
        './app/components/dates/dates.spec.js',
        './app/components/music/music.spec.js',
        './app/components/contact/contact.spec.js',
        './app/components/about/about.spec.js',
        './app/components/photos/photos.spec.js',
        './app/services/dates/dates.spec.js',
        './app/services/facts/facts.spec.js',
        './app/services/members/members.spec.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
