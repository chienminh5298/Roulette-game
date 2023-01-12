const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = 'development';

const config = {
	entry: './src/index.js',
	mode: devMode,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				use: ['babel-loader'],
				test: /\.js$/,
				exclude: [/node_modules/],
			},
			{
				use: ['file-loader'],
				test: /\.jpe?g$|\.ttf$|\.png$|\.mp3$/,
			},
			{
				test: /\.s?css$/,
				use: [devMode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.$': 'jquery',
			'window.jQuery': 'jquery',
			React: 'react',
		}),
		new MiniCssExtractPlugin(),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/'),
		},
	},
	devServer: {
		port: 3000,
		liveReload: true,
		watchFiles: ['./src', './public'],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};

module.exports = config;
