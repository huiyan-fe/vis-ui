var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'components/index.js'),
    },
    output: {
        filename: '[name].js',
        publicPath: 'http://localhost:8098/build',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', 
                options: {
                    presets: ['env', 'react']
                }
            }, {
                test: /\.scss|\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                })
            }
        ],
    },
    devServer: {
        contentBase: __dirname,
        port: 8098
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true,
        })
    ]
};
