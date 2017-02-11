const buble = require('rollup-plugin-buble');

module.exports = buble({
  jsx: 'createElement',
  objectAssign: 'Object.assign'
});
