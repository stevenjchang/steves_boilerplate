const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlPlugin = new HtmlWebpackPlugin({
  template: "./client/src/index.html",
  filename: "../index.html"
});

 module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
    // publicPath: '/'
  },
  devtool: 'inline-source-map',
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
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3001,
    // hot: true,
    // publicPath: path.join(__dirname, '/public/dist/'),
    historyApiFallback: true,
    // index: path.join(__dirname, 'public/index.html')
  }
};
