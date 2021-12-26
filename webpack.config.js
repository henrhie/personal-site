const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebPackPlugin = new HtmlWebPackPlugin({
	template: path.resolve(__dirname, 'public', 'index.html'),
	filename: path.resolve(__dirname, 'build', 'index.html'),
});

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[contenthash].[ext]',
							outputPath: 'build/',
						},
					},
				],
			},
			// {
			// 	test: /\.(woff|woff2)$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			// options: {
			// 			// 	name: './assets/fonts/[name].[ext]',
			// 			// 	publicPath: './assets/fonts',
			// 			// 	limit: 10000,
			// 			// 	fallback: 'file-loader',
			// 			// },
			// 		},
			// 	],
			// },
		],
	},
	plugins: [htmlWebPackPlugin],
};
