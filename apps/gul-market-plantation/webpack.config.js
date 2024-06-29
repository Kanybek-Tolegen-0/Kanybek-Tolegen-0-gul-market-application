const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { isDev, isProd, config } = require('../../webpack.common.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const RELEASE_PATH = process.env.RELEASE_PATH ?? ''

module.exports = merge(
  config({
    context: __dirname
  }),
  {
    name: 'gul-market-plantation',
    target: 'web',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist', ...RELEASE_PATH.split('/')),
      publicPath: RELEASE_PATH
    },
    devServer: {
      port: 4250,
      hot: true,
      historyApiFallback: true
    },
    optimization: {
      minimizer: [`...`, isProd && new CssMinimizerPlugin()].filter(Boolean)
    },
    plugins: [
      isDev && new ReactRefreshWebpackPlugin(),
      new MiniCssExtractPlugin({
        experimentalUseImportModule: true
      }),
      new HtmlWebpackPlugin({
        filename: './index.html',
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      isProd &&
        new webpack.SourceMapDevToolPlugin({
          filename: '[file].map[query]'
        }),
      isProd &&
        new CompressionPlugin({
          include: /(\.js|\.css)$/
        })
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: isDev ? [ReactRefreshTypeScript()] : []
              })
            }
          }
        },
        isProd && {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: ['source-map-loader']
        },
        {
          test: /\.css$/i,
          sideEffects: true,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false
              }
            },
            'css-loader',
            'postcss-loader'
          ].filter(Boolean)
        },
        {
          test: /\.(png|jpg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name][ext][query]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext][query]'
          }
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack']
        }
      ].filter(Boolean)
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, './assets')
      }
    }
  }
)
