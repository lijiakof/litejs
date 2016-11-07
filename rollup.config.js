const path = require('path');
var rollup = require('rollup');
const buble = require('rollup-plugin-buble');

module.exports = {
    banner: '/*lite js*/',
    entry: 'src/core.js',
    dest: 'dist/lite.js',
    // 模块格式 - 'amd', 'cjs', 'es6', 'iife', 'umd'
    format: 'umd',
    moduleName: 'Lite',
    plugins: [buble()],
}