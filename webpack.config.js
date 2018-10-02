const HTMLWebpackPlugin = require('html-webpack-plugin');

let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			
			}
		
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig],
	mode: 'production'
};
