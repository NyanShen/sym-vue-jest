const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const common_config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './src/styles/_variables.scss'
                        }
                    }
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf|woff2)\??.*$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            limit: 50000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? JSON.stringify('development') : JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
}
if (isDev) {
    common_config.devtool = "#cheap-module-eval-source-map";
    common_config.devServer = {
        port: 8080,
        host: 'sym.taxes.com',
        historyApiFallback: true,
        overlay: {
            errors: true
        },
        proxy: {
            '/api/*': {
                target: 'http://localhost:12306',
                changeOrigin: false
            }
        },
        hot: true
    }
    common_config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = common_config;