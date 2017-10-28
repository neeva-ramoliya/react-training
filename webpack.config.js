var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "src/client/public");
var APP_DIR = path.resolve(__dirname, "src/client/app/components");
var INDEX = path.resolve(__filename, "src/client/index.html");

var config = {
    entry: APP_DIR + "/app.jsx",
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                 test: /\.js?/,
                 include: APP_DIR,
                 loader: 'babel-loader'
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        compress: true,
        inline: true,
        host: '0.0.0.0',
        port: 8080,
        open: 'http://localhost:8080'
    }
};

module.exports = config;