const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['scripts', 'public'], {root: path.resolve(__dirname, 'app')}),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new CopyWebpackPlugin([ { from: path.resolve(__dirname, 'src/public'), to: path.resolve(__dirname, 'app/public') } ])
  ],
  entry: {
    popup: path.resolve(__dirname, 'src/popup_index.js'),
    contentscript: path.resolve(__dirname, 'src/contentscript.js'),
    background: path.resolve(__dirname, 'src/background.js')
  },
  output: {
    path: path.resolve(__dirname, 'app/scripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'arquivos/'
          }
        }
      },
      {
        test: /\.svg/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};