const path = require('path');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
    name: 'Lite',
    input: 'src/main.js',
    output: {
        banner: '/*lite js*/',
        file: 'dist/lite.js',
        // 模块格式 - 'amd', 'cjs', 'es6', 'iife', 'umd'
        format: 'umd',
        sourceMap: true,
    },
    treeshake: false,
    plugins: [
        babel()
    ]
}