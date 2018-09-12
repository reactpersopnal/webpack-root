const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css')
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css')

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    rules: [
        {
            // test: /\.css$/,
            // use: ExtractTextPlugin.extract({
            //     fallback: "style-loader",
            //     use: "css-loader"
            // })
            test: /\.css$/,
            use: extractCSS.extract(['css-loader','postcss-loader'])
        },
        {
            test: /\.less$/i,
            use: extractLESS.extract(['css-loader','less-loader'])
        }
    ],
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Production'
        }),
        // new ExtractTextPlugin("styles.css"),
        extractCSS,
        extractLESS
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}