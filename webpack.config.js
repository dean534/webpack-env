const path = require('path');
// plugins for creating new "index.html" and replace the original one
const HtmlWebpackPlugin = require('html-webpack-plugin');
// clean old file in dist
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '管理输出',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "eslint-loader",
                options:{
                    fix: true 
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    }
}