// Karma configuration

var webpack = require("webpack");

var configSettings = {
  "normal": {},
  "uglified": {
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
};

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/**/*.spec.js',
      'app/**/*.spec.ts'
    ],


    // list of preprocessors
    preprocessors: {
      'app/**/*.spec.js': ['webpack'],
      'app/**/*.spec.ts': ['webpack']
    },


    webpack: {
      entry: [
        "./jasmine-main.ts"
      ],

      resolve: {
        extensions: ["", ".js", ".jsx", ".ts", ".tsx", ".css", ".scss"]
      },
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: "style!css"
          },
          {
            test: /\.scss$/,
            loader: "style!css!sass"
          },
          { test: /\.jsx?/, loader: "babel?presets[]=es2015" },
          { test: /\.tsx?/, loader: "ts-loader" }
        ]
      }
    },


    webpackMiddleware: {
      stats: {
        colors: true
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
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


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,


    // List plugins explicitly, since autoloading karma-webpack
    // won't work here
    plugins: [
      require("karma-jasmine"),
      require("karma-spec-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-webpack")
      // require("../")
    ]
  });
};
