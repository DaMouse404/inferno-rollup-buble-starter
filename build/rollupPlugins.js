const commonjs = require('rollup-plugin-commonjs');

const bubleWithJsx = require('./bubleWithJsx');
const injectCreateElement = require('./injectCreateElement');
const resolveNodePackages = require('./resolveNodePackages');

module.exports = [
  bubleWithJsx,
  injectCreateElement,
  resolveNodePackages,
  commonjs()
];
