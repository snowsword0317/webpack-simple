const path = require('path');

module.exports = {
    // 单个入口文件
    // entry: './src/index.js',
    // 多个入口文件
    entry:{
        app:"./src/index.js",
        print:"./src/print.js"
    },

    output: {
        // filename: 'bundle.js',
        filename:"[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                   test: /\.(png|svg|jpg|gif)$/,
                      use: [
                       'file-loader'
                      ]
                   }
        ]
    }
};