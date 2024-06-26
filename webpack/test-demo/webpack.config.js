const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', path.resolve('./loaders/index.js'), 'less-loader']
      },
      { // webpack5 之后无需安装url-loader\file-loader, 秩序配置即可
        test: /.(jpg|jpeg|gif|png|svg)$/i,
        type:'asset/resource'
      },
      {
        test: /\.vue$/i,
        use: [path.resolve('./loaders/index.js'), 'vue-loader', path.resolve('./loaders/index.js')]
      },
  ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new miniCssExtractPlugin({
      filename: 'css/project.css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 200,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    port: 9999,
    // host: '',
    static: {
      // directory: ''
    }
  }
}