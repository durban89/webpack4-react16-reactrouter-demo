const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index.jsx',
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
    ],
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8083,
    historyApiFallback: {
      rewrites: [{
        from: /^\/$/,
        to: './index.html',
      }],
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'React + ReactRouter Demo',
      filename: './index.html', // 调用的文件
      template: './index.html', // 模板文件
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].bundle.css',
    }),
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial', // 必须三选一： "initial" | "all"(默认就是all) | "async"
      minSize: 0, // 最小尺寸，默认0
      minChunks: 1, // 最小 chunk ，默认1
      maxAsyncRequests: 1, // 最大异步请求数， 默认1
      maxInitialRequests: 1, // 最大初始化请求书，默认1
      name: () => {}, // 名称，此选项可接收 function
      cacheGroups: { // 这里开始设置缓存的 chunks
        priority: '0', // 缓存组优先级 false | object |
        vendor: { // key 为entry中定义的 入口名称
          chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          test: /react|lodash|react-dom|redux/, // 正则规则验证，如果符合就提取 chunk
          name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
          minSize: 0,
          minChunks: 1,
          enforce: true,
          maxAsyncRequests: 1, // 最大异步请求数， 默认1
          maxInitialRequests: 1, // 最大初始化请求书，默认1
          reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
        },
      },
    },
  },
});
