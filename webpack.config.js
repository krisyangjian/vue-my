const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
  },
  module: {
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: [
    //       {loader: 'style-loader'},
    //       {loader: 'css-loader'}
    //     ]
    //   }
    // ]
  }
};