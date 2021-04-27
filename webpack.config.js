const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    
    const isProd = argv.mode === 'production';
    const isDev = !isProd;
    const filename = (ext) => isProd ? `[name].[contenthash].bundel.${ext}` : `[name].bundel.${ext}`;
    
    return {
        target: 'web',
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: './index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: filename('js'),
        },
        devServer: {
            // contentBase: path.join(__dirname, 'dist'),
            // compress: true,
            port: 3000,
            open: true,
            hot: true,
            watchContentBase: true,
          },
        devtool: isDev ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                      name: './images/[name].[ext]',
                      esModule: false,
                    },
                },
                // {
                //     test: /\.(png|jpe?g|gif|ico|svg)$/i,
                //     use: [
                //     'file-loader?name=./images/[name].[ext]',
                //     {
                //         loader: 'image-webpack-loader',
                //         options: {
                //         bypassOnDebug: true, // webpack@1.x
                //         disable: true // webpack@2.x and newer
                //         }
                //          },
                //     ],
                // },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new MiniCssExtractPlugin({
                filename: filename('css')
            }),
            new CleanWebpackPlugin(),
        ],
    }
}