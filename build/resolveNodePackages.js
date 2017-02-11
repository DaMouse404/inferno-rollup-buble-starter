const nodeResolve = require('rollup-plugin-node-resolve');

module.exports = nodeResolve({
  jsnext: true,
  browser: true
});
