const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const fs = require('fs');
const PAGES_DIR = path.resolve(__dirname, './src/pages');
const PAGES = fs.readdirSync(PAGES_DIR)

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const filename = ext => mode === 'development' ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    //filename: mode === 'development' ? `[name].js` : `[name].[hash].js`,
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: mode === 'development' ? `assets/[name][ext]` : `assets/[name][hash][ext]`,
    clean: true, // Очищает директорию dist перед обновлением бандла
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
    hot: mode === 'development'
  },
  plugins: [
    ...PAGES.map(page => new HTMLWebpackPlugin({
      filename: mode === 'development' ? `${page}.html` : `${page}.[hash].html`,
      template: `${PAGES_DIR}/${page}/${page}.pug`,
      minify: {
        collapseWhitespace: mode === 'production',
      }
    })),
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
        use: 'html-loader',
        //loader: 'html-loader',
        //options: {
        //  minimize: {
        //    removeComments: false,
        //    collapseWhitespace: false,
        //  },
       // }

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
        options: {
          pretty: true,
          },
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