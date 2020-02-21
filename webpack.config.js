const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  // 方便追蹤錯誤用的，有其他選項
  devtool: 'inline-source-map',
  // 使用webpack-dev-server時，指定要使用的資料夾
  devServer: {
    contentBase: './dist',
    hot: true,
    open: 'chrome',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    // 清除資料夾內的舊檔案
    new CleanWebpackPlugin(),
    // 自動產生 html 等檔案
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
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
    // 這個是用來使用 eslint
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    },
    ],
  },
};
