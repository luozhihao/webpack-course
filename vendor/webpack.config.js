var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './app/index.js',
		vendor: ['jquery']
	},
	output: {
		filename: '[name].[chunkHash:5].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
		    names: ['vendor', 'manifest'],
		}),
		new HtmlWebpackPlugin({
            title: 'demo',
            template: 'index.html'
        }),
	]
}