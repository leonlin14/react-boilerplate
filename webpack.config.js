var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, 'src', 'js', 'app.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'public', 'assets'),
        publicPath: '/assets/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.png$/,  loader: "url-loader?limit=1000" },
            { test: /\.jpg$/,  loader: "url-loader?limit=1000" },
            { test: /\.gif$/,  loader: "url-loader?limit=1000" },
            { test: /\.woff$/, loader: "url-loader?limit=1000" }
        ]
    },
    externals: {
        jQuery: true
    }
};