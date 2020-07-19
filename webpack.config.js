const path = require('path')

module.exports = {
    entry: './src/app.ts',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(tsx|ts)$/,
            use: 'ts-loader'
        }, {
            test: /\.html$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].html'
                }
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    url: false
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test: /assets\//,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]
        }]
    }
}
