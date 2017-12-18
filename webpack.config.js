const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
            })
          }
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /^node_modules$/,
      //   use: ['babel-loader']
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader','css-loader', 'sass-loader',
      //   {
      //     loader: 'sass-resources-loader',
      //     options: {
      //       // Provide path to the file with resources
      //       resources: [path.resolve(__dirname, './src/default.scss')]
      //     },
      //   }]
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'        
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
};