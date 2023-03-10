var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    // files: ['test/**/*.spec.js'],
    files: ['packages/**/src/test/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec'],

    browsers: ['Chrome']
  })
}