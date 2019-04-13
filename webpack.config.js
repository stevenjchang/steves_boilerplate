const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlPlugin = new HtmlWebPackPlugin({
  template: "./client/src/index.html",
  filename: "./index.html"
});

 module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
    // publicPath: 'public/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/env'] // presets could also live in a separate babelrc file
          }
        }
      }
    ]
  },
  plugins: [
    HtmlPlugin,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public/dist'),
    // contentBase: 'dist',
    compress: true,
    port: 3001,
    stats: 'errors-only',
    // hot: true,
    publicPath: path.join(__dirname, '/'),
    historyApiFallback: true,
    // index: path.join(__dirname, 'public/index.html')
  }
};
