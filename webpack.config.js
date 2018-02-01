const Hwp = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        bundle: './main.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist'),
        // publicPath: './'
    },
    devtool: 'cheap-module-eavl-source-map',
    module: {  
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(woff|svg|eot|ttf|jpg|png|gif)\??.*$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue', '.json', '.less', '.sass'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // plugins: [
    //     new Hwp({
    //         title: 'hello webpack',
    //         template: 'index.html',
    //         inject: 'body'
    //     }),
    //     new webpack.BannerPlugin('1508A'),
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             'NODE_ENV': '"dev"'
    //         }
    //     })
    // ],
    devServer: {
        port: 8888,
        open: true,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
    // resolveLoader: {
    //     moduleExtensions: ['-loader']
    // }
};