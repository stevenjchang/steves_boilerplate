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
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [  // presets could also live in a separate babelrc file
              '@babel/react',
              '@babel/env',
              {
                'plugins': ['@babel/plugin-proposal-class-properties']
              }
            ]
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
    compress: true,
    port: 3001,
    stats: 'errors-only',
    historyApiFallback: true,
    proxy: {
      '/api': {
          target: 'http://[::1]:3000/', // [::1], not localhost. this trick took forever to figure out
          secure: false,
          changeOrigin: true,
          logLevel: 'debug',
      }
    }
  }
};
