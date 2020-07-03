var HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path")
const webpack = require("webpack")


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/app.js',
    module: {
        output: {
            libraryTarget: 'var',
            library: 'Client'
        },

        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                }
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/index.html",
            filename: "./index.html",
        })
    ]
}