const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Progressive Web Application'
        }),
        // new ManifestPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist')
    }
}