var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]-min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
                include: __dirname + '/src'
            },
            {
                test: /\.stylus$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/,
            //     loader: "url-loader"
            // }
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192 // 单位时b
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                include: __dirname + '/src',
                exclude: __dirname + '/node_module'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'demo1.html',
            inject: 'body'
            // chunks: ["b"]
        })
    ]
}

module.exports = config
