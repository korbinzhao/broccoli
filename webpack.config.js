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
            test: /\.tsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
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
};