const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let config = {
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index.jsx',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'React + ReactRouter Demo',
      filename: './index.html', // 调用的文件
      template: './index.html', // 模板文件
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
      options: {
        plugins: ['transform-async-to-generator', 'transform-strict-mode', 'transform-object-assign', 'transform-decorators-legacy', 'react-hot-loader/babel'],
        presets: ['es2015', 'react', 'stage-0'],
      },
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.(csv|tsv)$/,
      use: [
        'csv-loader',
      ],
    },
    {
      test: /\.xml$/,
      use: [
        'xml-loader',
      ],
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 这里是必须要加的，不然默认的值加载['.js','.json']为后缀的文件
    alias: {
      Actions: path.resolve(__dirname, 'src/actions'),
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  config = Object.assign({}, config, {
    mode: 'production',
  });
} else {
  config = Object.assign({}, config, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8083,
      historyApiFallback: {
        rewrites: [{
          from: /^\/$/,
          to: './index.html',
        },
        ],
      },
    },
  });
}


module.exports = config;
