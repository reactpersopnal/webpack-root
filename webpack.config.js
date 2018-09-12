const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
    entry: {
        // index: './src/index.js',
        // another: './src/another-module.js'
        index: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "common",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist')
    }
}