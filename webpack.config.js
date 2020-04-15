const path = require('path');

console.log("-----------打印配置-------------");
console.log(path);
console.log(__dirname);
console.log(__filename);
console.log("-----------打印完毕-------------");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};