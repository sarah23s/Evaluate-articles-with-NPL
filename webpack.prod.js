var HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path")
const webpack = require("webpack")

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/client/app.js',
    module: {
        output: {
            libraryTarget: 'var',
            library: 'Client'
        },

        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

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
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],

    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
}