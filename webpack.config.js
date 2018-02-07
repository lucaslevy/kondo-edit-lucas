const webpack = require ('webpack')
const ExtractTextPlugin = require ('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080, 
        contentBase: './public',
    },
    resolve: { 
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            theme: __dirname + '/theme'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin({
            disable: false,
            filename: 'app.css',
            allChunks: true
          }),
        // new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, 
        {
            test: /\.css$/i,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
            }),
          
        },
        {
            test: /\.scss?$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader!sass-loader'
            }),
          
        },
        // {
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        // },
        // {
            // test: /\.scss?$/,
            // loader: ExtractTextPlugin.extract('style', 'css-loader!sass-loader')
        // },
        // {
        //     test: /\.css$/,
        //     //loader: ExtractTextPlugin.extract('style-loader', 'css-loader')

        // }, 
        {
            test: /\.woff|.woff2|.ttf|.gif|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file-loader'
        }]
    }
}