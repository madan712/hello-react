var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode : 'development',
	resolve : {
		extensions : [ '.js', '.jsx' ]
	},
	module : {
		rules : [ {
			test : /\.jsx?$/,
			use : 'babel-loader'
		} ]
	},
	plugins : [ new HtmlWebpackPlugin({
		template : './src/index.html'
	}) ]
}