const path = require('path');  // node 的path路径对象
const htmlPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname == ./
    filename: 'bundle.js',
  },
  devServer: {
    port: '3000',
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    hot: true,
    proxy: {
        '/hello': {
            target: 'http://localhost:8080'
        }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    // 把public中的文件复制到dist文件中
    // new copyWebpackPlugin({
    //   patterns: [
    //       {
    //         // 从public中复制文件
    //           from: path.resolve(__dirname,'public'),
    //         // 把复制的文件存放到dis里面
    //           to: path.resolve(__dirname,'dist')
    //       }
    //     ],
    // })
  ],
  module: {
    rules: [
        // 处理ES6  js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // 处理less
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: {
          loader: 'less-loader'
        }
      },
      // 处理css
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader'
        }
      },
      // 处理svg
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: 'react-svg-loader'
        }
      },
      // 处理html
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  }
};