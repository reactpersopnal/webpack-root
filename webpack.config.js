const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require("extract-text-webpack-plugin")

//创建多个实例
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css')
// const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css')

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
        // index: './src/index.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: extractCSS.extract(['css-loader','postcss-loader'])
            // },
            // {
            //     test: /\.less$/i,
            //     use: extractLESS.extract(['css-loader','less-loader'])
            // }
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.bundle\.js$/,
                use: 'bundle-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        new BundleAnalyzerPlugin(),
        // new ExtractTextPlugin("styles.css")
        // extractCSS,
        // extractLESS
        new ExtractTextPlugin({
            filename:"css/style.css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    output: {
        filename: "[name].bundle.js",
        // chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist')
    }
}
