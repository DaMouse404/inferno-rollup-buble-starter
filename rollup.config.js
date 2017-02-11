import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';

export default {
  entry: 'src/index.js',
  external: [],
  moduleName: 'inferno-starter',
  plugins: [
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
    nodeResolve({
      jsnext: true,
      browser: true
    }),
    commonjs(),
    // uglify()
  ],
  format: 'iife',
  dest: 'dist/bundle.js'
};
