const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          "vue-loader"
        ]
      }
    ]
  }
};