var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'components/index.js'),
    },
    output: {
        filename: '[name].js',
        publicPath: '/build/',
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
                test: /\.css$/,
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
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                })
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
                            loader: 'resolve-url-loader',
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
            }, {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:8].[ext]',
                },
            }
        ],
    },
    devServer: {
        publicPath: '/build/',
        contentBase: __dirname,
        port: 8098
    },
    plugins: [
        // new BundleAnalyzerPlugin(),                //打包分析工具
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true,
        }),
        // new UglifyJSPlugin({
        //     uglifyOptions: {
        //         ie8: false,
        //         output: {
        //             comments: false,
        //             beautify: false
        //         },
        //         mangle: {
        //             keep_fnames: true
        //         },
        //         compress: {
        //             dead_code: true,
        //             warnings: false,
        //             drop_console: true
        //         }
        //     }
        // })
    ]
};
