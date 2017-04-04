/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    }, {
      test: /\.(woff2?|ttf|eot|svg)$/,
      loader: 'url-loader?limit=10000'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /bootstrap\/dist\/js\/umd\//,
      loader: 'imports-loader?jQuery=jquery'
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  devServer: {
    contentBase: './src/public',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }
}

module.exports.devtool = 'eval-source-map';
