const jsdoc2md = require("jsdoc-to-markdown");
const fs = require('fs');
const path = require('path');

const srcPath = './src/';
const distPath = './doc/';

// TODO: 生成目录
// TODO: 是否能优化
fs.readdirSync(srcPath).forEach((file) => {
    if (file != 'main.js') {
        jsdoc2md.render({
            files: srcPath + file
        }).then((markdown) => {
            let fileName = distPath + file;
            fileName = fileName.split('.js')[0]
            fs.writeFile(fileName + '.md', markdown);
        })
    }
})