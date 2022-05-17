const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhase:4].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: 'babel-loader'
      },
      {
        test: /\.ts[x]/,
        use: 'ts-loader'
      },
      {
        test: /\.(sc|c)ss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
  ]
}

module.exports = webpackBaseConfig