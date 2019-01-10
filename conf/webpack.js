const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: { //ビルドするファイル
    common: './src/js/common.js'
  },
  output: {
    path: path.join(__dirname, '/../dist/js'), //ビルドしたファイルを吐き出す場所(絶対パス)
    filename: '[name].js' //ビルドした後のファイル名
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['env']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './conf/eslintrc.js'
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
