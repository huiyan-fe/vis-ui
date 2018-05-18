var path = require('path');

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
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    devServer: {
        contentBase: __dirname,
        port: 8098
    }
};
