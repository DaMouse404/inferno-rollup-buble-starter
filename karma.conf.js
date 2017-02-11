'use strict';

const buble = require('rollup-plugin-buble');
const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const inject = require('rollup-plugin-inject');

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
      plugins: [
        globals(),
        buble({
          jsx: 'createElement',
          objectAssign: 'Object.assign'
        }),
        inject({
          include: '**/*.js',
          exclude: 'node_modules/**',
          modules: {
            createElement: 'inferno-create-element'
          }
        }),
        builtins(),
        nodeResolve({
          jsnext: true,
          browser: true
        }),
        commonjs()
      ]
    },

    plugins: [
      require('karma-rollup-plugin'),
      require('karma-mocha'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher')
    ],

    singleRun: true,

    browsers: ['PhantomJS','Chrome']
  });
};
