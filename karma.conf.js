'use strict';

const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');

const testRollupPlugins = [globals(), builtins()];
const rollupPlugins = require('./build/rollupPlugins');

module.exports = function(config) {
  config.set({
    files: [
      'test/**/*.js',
      { pattern: 'node_modules/**/*.js', included: false }
    ],

    frameworks: ['mocha'],

    preprocessors: {
      'test/**/*.js': ['rollup']
    },

    rollupPreprocessor: {
      format: 'iife',
      sourceMap: 'inline',
      plugins: testRollupPlugins.concat(rollupPlugins)
    },

    plugins: [
      require('karma-rollup-plugin'),
      require('karma-mocha'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher')
    ],

    singleRun: true,

    browsers: ['Chrome']
  });
};
