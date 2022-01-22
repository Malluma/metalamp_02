const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const fs = require('fs');
const PAGES_DIR = path.resolve(__dirname, './src/pages');
const PAGES = fs.readdirSync(PAGES_DIR)

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: `assets/[name].[hash][ext]`,
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
    plugins: [
      ...PAGES.map(page => new HTMLWebpackPlugin({
          filename: `${page}.html`,
          template: `${PAGES_DIR}/${page}/${page}.pug`
        }
      )),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new ESLintPlugin({
      exclude: 'node-modules'
    }, ),


  ],
  module: {
    rules: [{
        test: /\.html$/i,
        use: 'html-loader'
      },
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
        type: 'asset/resource'
      },
      {
        test: /\.(svg|ttf|woff|woff2|eot)$/,
        type: 'asset/resource'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
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