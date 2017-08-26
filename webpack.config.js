const path = require('path');
const HtmlWebpackagePlugin = require('html-webpack-plugin')
module.exports = {  
    entry: {
       'app': path.resolve(__dirname, 'app')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules:[{
            test:/\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets:['es2015','react']
            },
        },
        {
            test: /\.css/,
            use: [
            'style-loader', 
            'css-loader']
        }
        ]
    },
    plugins:[
        new HtmlWebpackagePlugin({
            template: require('html-webpack-template'),
            title:'Hello World!!',
            appMountId: 'app'
        }),
    ],
    resolve: {
        extensions:['.jsx','.js']
    }
}