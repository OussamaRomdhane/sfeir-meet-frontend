const webpack = require('webpack');

const path = require('path');

const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  dotenv.config();
  const envKeys = {
    GOOGLE_MAPS_API_KEY: JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
    BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
  };

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index_bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new CopyWebpackPlugin([{ from: 'assets' }]),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };
};
