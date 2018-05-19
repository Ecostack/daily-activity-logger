const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.join(__dirname, 'src');

module.exports = {
	entry: [src + '/client/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{
				test: /\.pug$/,
				use: ['html-loader', 'pug-html-loader?pretty&exports=false']
			}

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'index.html',
			template: src + '/client/index.pug',
		}),
	],
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};