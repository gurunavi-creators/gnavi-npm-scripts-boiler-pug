const webpack = require('webpack');

module.exports = {
  entry: { //ビルドするファイル
    common: './src/js/common.js'
  },
  output: {
    path: __dirname + '/../dist/js', //ビルドしたファイルを吐き出す場所(絶対パス)
    filename: '[name].js' //ビルドした後のファイル名
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
};
