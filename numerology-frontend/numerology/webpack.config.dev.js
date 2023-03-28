const path = require('path');  // node 的path路径对象
const htmlPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const interpolateHtmlPlugin = require("interpolate-html-plugin");


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
      directory: path.join(__dirname, 'dist'),
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
      template: "./src/template/index.html",
      filename: "index.html",
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new interpolateHtmlPlugin({
      PUBLIC_URL: './assets' 
    }),
    // new copyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "public"),  // 拷贝来源
    //       to: path.resolve(__dirname, "dist"), // 拷贝到的位置
    //       toType: "dir",  // 目录dir、文件file或模板template
    //     }
    //   ],
    //   options: {
    //     concurrency: 100,   // 同时请求fs的数量限制
    //   }
    // })
  ],
  module: {
    rules: [
        // 处理ES6  js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
        }
      },
      // 处理less
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: {
          loader: 'less-loader',
        }
      },
      // 处理css
      {
        test: /\.css$/,
        exclude: /node_modules/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
        
      },
      // 处理svg
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'svg',
            },
          },
        ],
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