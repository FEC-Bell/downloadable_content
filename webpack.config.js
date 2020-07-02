const path = require('path');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'main.js',
    path: __dirname + '/client/dist'
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
            sourceMaps: "inline",
          }
        }
      }
    ]
  }

};