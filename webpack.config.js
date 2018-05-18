const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'vis-ui': path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'pages/dist')
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
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),                //打包分析工具
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: false,
                output: {
                    comments: false,
                    beautify: false
                },
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    dead_code: true,
                    warnings: false,
                    drop_console: true
                }
            }
        })
    ]
};