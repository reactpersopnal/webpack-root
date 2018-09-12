const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    optimization: {
        splitChunks:{
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: "all",
                    minChunks: 1
                },
                commons: {
                    name: "manifest",
                    chunks: "all",
                    minChunks: 1
                },
            }
        }
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname,'dist')
    }
}