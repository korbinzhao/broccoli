const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.tsx'),
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            components: path.join(__dirname, 'src/components'),
            pages: path.join(__dirname, 'src/pages'),
            services: path.join(__dirname, 'src/services')
        },
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less$/,
            use: [
                // compiles Less to CSS
                "style-loader",
                "css-loader",
                "less-loader",
            ],
            include: path.join(__dirname, 'src')
        }]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'axios': 'axios'
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true,
        client: {
            progress: true,
        },
        hot: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};