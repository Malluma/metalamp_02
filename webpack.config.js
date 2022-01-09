const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: `assets/${filename('[ext]')}`,
		clean: true, // Очищает директорию dist перед обновлением бандла
		// Свойство стало доступно с версии 5.20.0, до этого использовался
		// CleanWebpackPlugin
	},
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
	},
	devServer: {
		port: 4200,
		hot: isDev
	},
	devtool: isDev ? 'source-map' : '',
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new MiniCssExtractPlugin({
			filename: filename('css')
		}),
		new ESLintPlugin({exclude: 'node-modules'})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ca]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(svg|ttf|woff|woff2|eot)$/,
				type: 'asset/resource'
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']						
					}
				}
			}
		]
	}
}