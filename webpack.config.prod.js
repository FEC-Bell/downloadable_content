const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
// let cleanOptions = {
//   root: '/full/webpack/root/path',
//   exclude: ['shared.js'],
//   verbose: true,
//   dry: false
// };

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'main.js',
    path: __dirname + '/client/dist',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            sourceMaps: 'inline',
          }
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(cleanOptions),
    new HtmlWebpackPlugin({
      template: 'client/template.html'
    }),
  ]
};