const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash:4].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      Pages: path.join(__dirname, '../src/pages'),
      Utils: path.join(__dirname, '../src/utils'),
      Components: path.join(__dirname, '../src/components'),
      Common: path.join(__dirname, '../src/common'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.(sc|c)ss/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
  ]
}

module.exports = webpackBaseConfig
