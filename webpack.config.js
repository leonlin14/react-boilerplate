var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, 'src', 'js', 'app.js')
        ],
		vendors: [
			'react',
			'react-dom'
		]
    },
    output: {
        path: path.join(__dirname, 'public', 'assets'),
        publicPath: '/assets/',
        filename: "bundle.js"
    },
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new webpack.NoErrorsPlugin()
	],
    module: {
        loaders: [
        	{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: [ 'react' ]
				}
			},
            { test: /\.png$/,  loader: "url-loader?limit=1000" },
            { test: /\.jpg$/,  loader: "url-loader?limit=1000" },
            { test: /\.gif$/,  loader: "url-loader?limit=1000" },
            { test: /\.woff$/, loader: "url-loader?limit=1000" }
        ],
		noParse: [
			'react/dist/react.min.js',
			'react-dom/dist/react-dom.min.js'
		]
    },
    externals: {
        jQuery: true
    },
	resolve: {
		alias: {
			'react$': 'react/dist/react.min.js',
			'react-dom$': 'react-dom/dist/react-dom.min.js'
		}
	}
};