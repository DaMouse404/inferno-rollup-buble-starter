const inject = require('rollup-plugin-inject');

module.exports = inject({
  include: '**/*.js',
  exclude: 'node_modules/**',
  modules: {
    createElement: 'inferno-create-element'
  }
});
