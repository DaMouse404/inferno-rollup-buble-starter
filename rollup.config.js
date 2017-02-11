const uglify = require('rollup-plugin-uglify');

const rollupPlugins = require('./build/rollupPlugins');

const buildRollupPlugins = [uglify()];

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: rollupPlugins.concat(buildRollupPlugins),
};
