const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBaseConfig = require('./webpack.base.config')

const webpackProdConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({ // 清除打包历史文件
      protectWebpackAssets: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhase:4].css'
    }),
  ],
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)
