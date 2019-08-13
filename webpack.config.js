var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'vis-ui': path.join(__dirname, 'src/index.js'),
    },
    externals: [
        {
            react: {
                amd: 'react',
                commonjs: 'react',
                commonjs2: 'react',
                root: 'React',
            }
        }
    ],
    output: {
        filename: 'index.js',
        library: 'visui',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib')
    },
    module: {
        rules: [{
            test: /\.js|\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react']
            }
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        })
    ]
};
